

export default function Home() {
  return (
    <div className="container mt-5">
    <h1 className="text-center">Car Racing Catalog</h1>
    <div className="d-flex justify-content-center mt-3">
      <Link to="/login" className="btn btn-primary mr-3">Login</Link>
      <Link to="/register" className="btn btn-secondary">Register</Link>
    </div>
    </div>
   );
}