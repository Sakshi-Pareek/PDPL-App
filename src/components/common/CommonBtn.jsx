export default function CommonBtn(props) {
  return (
    <>
      <button className="fw-medium fs_md rounded-5 common_btn py-2 px-4 text-white cursor_pointer transition">
        {props.btnname}
      </button>
    </>
  );
}



