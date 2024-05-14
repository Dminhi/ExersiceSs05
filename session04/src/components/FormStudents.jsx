import React, { useState } from "react";

export default function FormStudents(props) {
  const { editButton, handleChange, handleSubmit, studentInfo, checkView } =
    props;
  return (
    <div>
      <h2>Thông tin Sinh viên</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="studentCode">Mã Sinh viên:</label>
        <br />
        <input
          readOnly={checkView}
          type="text"
          id="studentCode"
          name="studentCode"
          value={studentInfo.studentCode}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="studentName">Tên Sinh viên:</label>
        <br />
        <input
          readOnly={checkView}
          type="text"
          id="studentName"
          name="studentName"
          value={studentInfo.studentName}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="age">Tuổi:</label>
        <br />
        <input
          readOnly={checkView}
          type="number"
          id="age"
          name="age"
          value={studentInfo.age}
          onChange={handleChange}
        />
        <br />
        <div className="sex">
          <label htmlFor="sex">Giới tính:</label>
          <br />
          <input
            readOnly={checkView}
            type="radio"
            id="nam"
            name="sex"
            value="Nam"
            onChange={handleChange}
          />
          <label htmlFor="nam">Nam</label>
          <input
            readOnly={checkView}
            type="radio"
            id="nu"
            name="sex"
            value="Nữ"
            onChange={handleChange}
          />

          <label htmlFor="nu">Nữ</label>
          <br />
        </div>
        <label htmlFor="dob">Ngày sinh:</label>
        <br />
        <input
          readOnly={checkView}
          type="text"
          id="dob"
          name="dob"
          value={studentInfo.dob}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="homeTown">Nơi sinh:</label>
        <br />
        <input
          readOnly={checkView}
          type="text"
          id="homeTown"
          name="homeTown"
          value={studentInfo.homeTown}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="address">Địa chỉ:</label>
        <br />
        <textarea
          readOnly={checkView}
          id="address"
          name="address"
          value={studentInfo.address}
          onChange={handleChange}
          rows="4"
          cols="50"
        ></textarea>
        <br />

        <input type="submit" value={editButton} />
      </form>
    </div>
  );
}
