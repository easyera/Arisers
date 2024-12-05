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
            <h4>Full Stack Development</h4>
          </div>
          <div className="service-card-pop">
            <div className="service-card-pop-content">
              <p>
                Get comprehensive full-stack development services from Arisers.
                We build scalable, secure, and dynamic web solutions to power
                your business growth, from front to back.
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
            <h4>Frontend or Backend Development</h4>
          </div>
          <div className="service-card-pop">
            <div className="service-card-pop-content">
              <p>
                Need specialized web support? Arisers offers expert frontend and
                backend development to optimize your website’s functionality and
                user experience for all your business needs.
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
            <h4>3D Media Services</h4>
          </div>
          <div className="service-card-pop">
            <div className="service-card-pop-content">
              <p>
                Elevate your business with Arisers 3D media services. We create
                stunning animations, product visualizations, and 3D assets
                tailored to your brand and professional needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
