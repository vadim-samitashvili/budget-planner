import { Dashboard } from "../Dashboard";
import { act, render, screen } from "@testing-library/react";
import { CATEGORIES, HISTORIES } from "./__mock__";

const renderComponent = () => {
  return render(
    <Dashboard
      histories={HISTORIES}
      categories={CATEGORIES}
      getHistories={getHistories}
      setNewHistory={setNewHistory}
      getCategories={getCategories}
      setNewCategory={setNewCategory}
      deleteCategory={deleteCategory}
    />
  );
};

const renderComponentAsync = async () => {
  await act(async () => {
    await render(
      <Dashboard
        histories={HISTORIES}
        categories={CATEGORIES}
        getHistories={getHistories}
        setNewHistory={setNewHistory}
        getCategories={getCategories}
        setNewCategory={setNewCategory}
        deleteCategory={deleteCategory}
      />
    );
  });
};

const getHistories = jest.fn();
const setNewHistory = jest.fn();
const getCategories = jest.fn();
const setNewCategory = jest.fn();
const deleteCategory = jest.fn();

describe("Dashboard page", () => {
  it("snapshot matching", async () => {
    await act(async () => {
      const { baseElement } = await renderComponent();
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe("should render", () => {
    beforeEach(async () => {
      await renderComponentAsync();
    });

    it("a title", () => {
      expect(screen.getByText(/dashboard page/i)).toBeInTheDocument();
    });
  });
});
