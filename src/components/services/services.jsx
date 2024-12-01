import "./services.css";

export default function Service() {
  return (
    <div className="service-section">
      <h1>Services</h1>
      <hr />
      <div className="service-innercontent">
        <div className="service-card">
          <div className="service-card-header">
            <img
              src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="servicelo"
            />
          </div>
          <div className="service-card-footer">
            <h4>Full stack</h4>
          </div>
          <div className="service-card-pop">
            <div className="service-card-pop-content">
              <p>
                We create visually appealing and user-friendly websites and
                applications. Our team uses the latest technologies to ensure
                fast, secure, and responsive designs that meet your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-header">
            <img
              src="https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="servicelo"
            />
          </div>
          <div className="service-card-footer">
            <h4>Front or Back</h4>
          </div>
          <div className="service-card-pop">
            <div className="service-card-pop-content">
              <p>
                We create visually appealing and user-friendly websites and
                applications. Our team uses the latest technologies to ensure
                fast, secure, and responsive designs that meet your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="service-card">
          <div className="service-card-header">
            <img
              src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="servicelo"
            />
          </div>
          <div className="service-card-footer">
            <h4>3D media</h4>
          </div>
          <div className="service-card-pop">
            <div className="service-card-pop-content">
              <p>
                We create visually appealing and user-friendly websites and
                applications. Our team uses the latest technologies to ensure
                fast, secure, and responsive designs that meet your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
