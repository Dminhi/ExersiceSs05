import React from "react";

export default function NarBar() {
  return (
    <div className="nar-bar">
      <div>
        <button>Thêm mới sinh viên</button>
      </div>
      <div>
        <input placeholder="Search here" type="text" />
      </div>
      <div>
        <button>Tìm kiếm</button>
      </div>
      <div>
        <select name="" id="">
          <option value="">Sắp xếp</option>
        </select>
      </div>
    </div>
  );
}
