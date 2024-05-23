import "./App.css";

import { Pagination, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { getCategoriesThunk } from "./redux/reducers/CategorySlice";
import { useEffect } from "react";

function App() {
  const getCategories = useSelector((state) => state.categories);
  const currentPage = useSelector((state) => state.categories.currentPage);
  const totalElement = useSelector((state) => state.categories.totalElement);
  const size = useSelector((state) => state.categories.pageSize);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesThunk({ page: currentPage, size: size }));
  }, []);

  const handleOnChange = (page, pageSize) => {
    dispatch(getCategoriesThunk({ page: page - 1, size: pageSize }));
  };

  return (
    <div className="container">
      <input onChange={handleSearch} type="text" /> <label>Search</label>
      <h2>Category Information</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category Name</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {getCategories.loading ? (
            <tr>
              <td colSpan="4">
                <div className="spin-container">
                  <Spin />
                </div>
              </td>
            </tr>
          ) : (
            getCategories.data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.categoryName}</td>
                <td>{item.description}</td>
                <td>
                  <span
                    className={`status ${item.status ? "active" : "inactive"}`}
                  >
                    {item.status ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <Pagination
        onChange={handleOnChange}
        defaultPageSize={size}
        defaultCurrent={currentPage}
        total={totalElement}
      />
    </div>
  );
}

export default App;
