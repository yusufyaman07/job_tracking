import { useDispatch } from "react-redux";
import { filterBySearch, sortJobs } from "../redux/slices/jobSlice";
import { sortOptions, statusOptions, typeOptions } from "./../constants/index";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <section className="filter-sec">
      <h2>Filtering Form</h2>

      <form>
        <div>
          <label>Search by company name</label>
          <input
            onChange={e => {
              dispatch(
                filterBySearch({ name: "company", text: e.target.value })
              );
            }}
            type="text"
          />
        </div>

        <div>
          <label>Situation</label>
          <select
            onChange={e =>
              dispatch(filterBySearch({ name: "status", text: e.target.value }))
            }
          >
            <option hidden>Choose</option>
            {statusOptions.map(i => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Type</label>
          <select
            onClick={e =>
              dispatch(filterBySearch({ name: "type", text: e.target.value }))
            }
          >
            <option hidden>Choose</option>
            {typeOptions.map(i => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Sort</label>
          <select onChange={e => dispatch(sortJobs(e.target.value))}>
            <option hidden>Choose</option>
            {sortOptions.map(i => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="reset" id="special-button">
            <span className="circle1"></span>
            <span className="circle2"></span>
            <span className="circle3"></span>
            <span className="circle4"></span>
            <span className="circle5"></span>
            <span className="text">Reset Filters</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Filter;
