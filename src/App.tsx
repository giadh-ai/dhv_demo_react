import "./styles.css";
// @ts-ignore
import products from "./data/product.js";

export default function App() {
  var lophoc = "2505CT- Trường Đại học Hùng Vương TP. Hồ Chí Minh";
  var ngay = 3;
  var thang = 10;
  var dssv = ["Nguyễn Văn An", "Trần Văn Bình", "Nguyễn Văn Cường111"];

  return (
    <div className="App">
      <h1>Hello {lophoc}</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        <h3>DANH SÁCH SINH VIÊN</h3>
      </div>
      <div>
        {dssv.map((sv) => {
          return <p>{sv}</p>;
        })}
      </div>
      <div className="grid grid-cols-4 gap-4">
        {products.map((item: any) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <img src={item.image} alt={item.title} className="h-40 mx-auto" />
            <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
            <p className="text-gray-600">{item.price.toLocaleString()} VND</p>
            <p className="text-sm text-gray-500">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

