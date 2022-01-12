import React, { FC, useCallback, useEffect, useState } from "react";
import { calculateRecords } from "../../helpers";
import { Charts, Overview, Records } from "./components";
import { CircularProgress, Container } from "@mui/material";
import { DashboardProps } from "./types";
import { IRecord } from "../../types";

import {
  Grid,
  Wrapper,
  DashboardTitle,
  ProgressWrapper,
} from "./Dashboard.styles";

export const Dashboard: FC<DashboardProps> = ({
  histories,
  getHistories,
  setNewHistory,
  categories,
  getCategories,
  setNewCategory,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const fetchData: () => Promise<void> = useCallback(async () => {
    setIsLoading(true);
    await getCategories();
    await getHistories(null, 10000);
    setIsLoading(false);
  }, [getCategories, getHistories]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const records: IRecord[] = calculateRecords(histories, categories);

  const lastRecords: IRecord[] = records.slice(-5);

  return (
    <Container>
      {isLoading ? (
        <ProgressWrapper>
          <CircularProgress />
        </ProgressWrapper>
      ) : (
        <Wrapper>
          <DashboardTitle>Dashboard page</DashboardTitle>
          <Grid>
            <Overview records={records} />
            <Records
              categories={categories}
              lastRecords={lastRecords}
              setNewHistory={setNewHistory}
            />
            <Charts records={records} setNewCategory={setNewCategory} />
          </Grid>
        </Wrapper>
      )}
    </Container>
  );
};