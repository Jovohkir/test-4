import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function SortedAndFilter({ filter, setFilter }) {
  return (
    <div className="d-flex m-3  flex-row-reverse">
      <MyInput
        className="form-control"
        placeholder="search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selected) => setFilter({ ...filter, sort: selected })}
        defaultValue="Sorted By"
        options={[
          { value: "title", name: "programming" },
          { value: "stack", name: "names" }
        ]}
      />
    </div>
  );
}
export default SortedAndFilter;
