import React from "react";
import PropTypes from "prop-types";
import Pagination from "../components/pagination";
import SortOn from "../components/sort-on";
import FilterOn from "../components/filter-on";
import "./table-actions.css";

const TableActions = ({
  totalRecords,
  loadPage,
  currentPage,
  sortOn,
  filterOn,
  updateSortOn,
  updateFilterOn,
  sortSchema,
  filterSchema
}) => {
  return (
    <div
      className="table-actions"
      role="toolbar"
      aria-label="Table actions, includes pagination, sort options, and a search bar"
    >
      <FilterOn
        className="mb-2"
        filterSchema={filterSchema}
        filterOn={filterOn}
        updateFilterOn={updateFilterOn}
      />

      <div className="row no-gutters justify-content-between">
        <Pagination
          totalRecords={totalRecords}
          loadPage={loadPage}
          currentPage={currentPage}
        />

        <SortOn
          sortOn={sortOn}
          updateSortOn={updateSortOn}
          schema={sortSchema}
        />
      </div>
    </div>
  );
};

TableActions.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  loadPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  filterSchema: PropTypes.object.isRequired,
  filterOn: PropTypes.string.isRequired,
  updateFilterOn: PropTypes.func.isRequired,
  sortSchema: PropTypes.object.isRequired,
  sortOn: PropTypes.shape({
    sort: PropTypes.string.isRequired,
    order: PropTypes.oneOf(["asc", "desc"])
  }).isRequired,
  updateSortOn: PropTypes.func.isRequired
};

export default TableActions;
