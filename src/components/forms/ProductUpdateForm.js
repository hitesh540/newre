import React from "react";
import { Select } from "antd";

const { Option } = Select;
 
const ProductUpdateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCategoryChange,
  categories,
  subOptions,
  arrayOfSubs,
  setArrayOfSubs,
  selectedCategory,
}) => {
  // destructure
  const {
    title,
    description,
    descrip,
    desc,
    mael,
    contact,
    price,
    category,
    subs,
    categry,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>
      
      <div className="form-group">
        <label>Iframe</label>
        <input
          type="text"
          name="descrip"
          className="form-control"
          value={descrip}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Owner Name</label>
        <input
          type="text"
          name="desc"
          className="form-control"
          value={desc}
          onChange={handleChange}
        />
      </div>

      
      <div className="form-group">
        <label>Owner Email</label>
        <input
          type="text"
          name="mael"
          className="form-control"
          value={mael}
          onChange={handleChange}
        />
      </div>

      
      <div className="form-group">
        <label>Owner Number</label>
        <input
          type="text"
          name="contact"
          className="form-control"
          value={contact}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Price</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <select
          value={categry === "Bachelor" ? "Bachelor" : "Family"}
          name="categry"
          className="form-control"
          onChange={handleChange}
        >
          <option value="Family">Family</option>
          <option value="Bachelor">Bachelor</option>
        </select>
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Duration</label>
        <select
          value={color}
          name="color"
          className="form-control"
          onChange={handleChange}
        >
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Type</label>
        <select
          value={brand}
          name="brand"
          className="form-control"
          onChange={handleChange}
        >
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>City</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCategoryChange}
          value={selectedCategory ? selectedCategory : category._id}
        >
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      <div>
        <label>City Related Area</label>
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          value={arrayOfSubs}
          onChange={(value) => setArrayOfSubs(value)}
        >
          {subOptions.length &&
            subOptions.map((s) => (
              <Option key={s._id} value={s._id}>
                {s.name}
              </Option>
            ))}
        </Select>
      </div>

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductUpdateForm;
