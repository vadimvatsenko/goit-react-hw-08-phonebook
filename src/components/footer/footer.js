import { Outlet } from "react-router-dom";

export default function Footer() {
  return (
      <>
      <div style={{
        height: '100px',
        background: 'blue'
      }}>Vadym Vatsenko</div>
      <Outlet />
      </>
    );
}