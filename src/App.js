import React, { useState } from "react";
import {
  Star,
  Phone,
  Mail,
  MapPin,
  Clock,
  Scissors,
  Users,
  Award,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const HairSalonWebsite = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using EmailJS REST API directly
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        service: formData.service,
        date: formData.date,
        message: formData.message,
        to_email: "pragneshmaru12112001@gmail.com",
      };

      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_pragnesh",
            template_id: "template_9cqomdl",
            user_id: "eL4mNe9yoGxs08Hdx",
            template_params: templateParams,
          }),
        }
      );

      if (response.ok) {
        alert(
          "🎉 Appointment request sent successfully! We will contact you soon."
        );

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          date: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Email send failed:", error);
      alert(
        "❌ Failed to send appointment request. Please try again or call us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      name: "Haircut & Styling",
      price: "$45-65",
      duration: "45 min",
      image:
        "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=300&fit=crop",
    },
    {
      name: "Hair Coloring",
      price: "$80-150",
      duration: "2-3 hrs",
      image:
        "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=300&fit=crop",
    },
    {
      name: "Hair Treatment",
      price: "$60-90",
      duration: "1 hr",
      image:
        "https://images.unsplash.com/photo-1549236177-6c2cc42eda0b?w=400&h=300&fit=crop",
    },
    {
      name: "Bridal Styling",
      price: "$120-200",
      duration: "2-4 hrs",
      image:
        "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=300&fit=crop",
    },
    {
      name: "Hair Extensions",
      price: "$100-300",
      duration: "2-3 hrs",
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop",
    },
    {
      name: "Beard Styling",
      price: "$25-40",
      duration: "30 min",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop",
    },
  ];

  const galleryImages = [
    {
      category: "haircuts",
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop",
    },
    {
      category: "coloring",
      src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
    },
    {
      category: "styling",
      src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400&h=400&fit=crop",
    },
    {
      category: "haircuts",
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop",
    },
    {
      category: "coloring",
      src: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=400&fit=crop",
    },
    {
      category: "styling",
      src: "https://images.unsplash.com/photo-1549236177-6c2cc42eda0b?w=400&h=400&fit=crop",
    },
    {
      category: "haircuts",
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=400&fit=crop",
    },
    {
      category: "styling",
      src: "https://images.unsplash.com/photo-1522337050049-adb0cf4af4c8?w=400&h=400&fit=crop",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing service! The team transformed my hair completely. I couldn't be happier with the results.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Mike Chen",
      rating: 5,
      text: "Professional staff and great atmosphere. My wife and I both love coming here for our hair needs.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "Best hair salon in town! They really listen to what you want and deliver exceptional results every time.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    },
  ];

  const filteredImages =
    activeTab === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeTab);

  return (
    <div className="min-h-screen bg-white">
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Custom Styles */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(
              135deg,
              rgba(139, 69, 19, 0.9),
              rgba(160, 82, 45, 0.8)
            ),
            url("https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=800&fit=crop");
          background-size: cover;
          background-position: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          color: white;
        }

        .service-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: none;
          border-radius: 15px;
          overflow: hidden;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        }

        .gallery-img {
          transition: transform 0.3s ease;
          cursor: pointer;
          border-radius: 10px;
        }

        .gallery-img:hover {
          transform: scale(1.05);
        }

        .testimonial-card {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 20px;
          border: none;
        }

        .navbar-brand {
          font-size: 1.8rem;
          font-weight: bold;
          color: #8b4513 !important;
        }

        .btn-primary {
          background: linear-gradient(135deg, #8b4513, #a0522d);
          border: none;
          border-radius: 25px;
          padding: 12px 30px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          background: linear-gradient(135deg, #a0522d, #8b4513);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(139, 69, 19, 0.3);
        }

        .section-title {
          color: #8b4513;
          font-weight: bold;
          margin-bottom: 3rem;
        }

        .footer {
          background: linear-gradient(135deg, #2c2c2c, #1a1a1a);
        }

        .contact-info {
          background: linear-gradient(135deg, #f8f9fa, #e9ecef);
          border-radius: 15px;
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <Scissors className="me-2" size={24} />
            Glamour Hair Salon
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#testimonials">
                  Reviews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">
                Transform Your Look at Glamour Hair Salon
              </h1>
              <p className="lead mb-4">
                Experience premium hair care with our expert stylists. From cuts
                to colors, we'll help you achieve the perfect look.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a href="#services" className="btn btn-primary btn-lg">
                  View Services
                </a>
                <a href="#contact" className="btn btn-outline-light btn-lg">
                  Book Appointment
                </a>
              </div>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <img
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=500&fit=crop"
                alt="Hair Salon Interior"
                className="img-fluid rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600&h=500&fit=crop"
                alt="Professional Hair Styling"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <h2 className="section-title">About Glamour Hair Salon</h2>
              <p className="mb-4">
                With over 15 years of experience in the beauty industry, Glamour
                Hair Salon has been the premier destination for hair care and
                styling. Our team of certified professionals is dedicated to
                helping you look and feel your best.
              </p>

              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <Users className="text-primary me-3" size={24} />
                    <div>
                      <h6 className="mb-1">Expert Stylists</h6>
                      <small className="text-muted">
                        Certified professionals
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex align-items-center">
                    <Award className="text-primary me-3" size={24} />
                    <div>
                      <h6 className="mb-1">Award Winning</h6>
                      <small className="text-muted">Industry recognition</small>
                    </div>
                  </div>
                </div>
              </div>

              <a href="#services" className="btn btn-primary">
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Services</h2>
            <p className="lead text-muted">
              Professional hair care services tailored to your needs
            </p>
          </div>

          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card service-card h-100 shadow-sm">
                  <img
                    src={service.image}
                    className="card-img-top"
                    alt={service.name}
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="text-muted mb-2">
                      Duration: {service.duration}
                    </p>
                    <h6 className="text-primary mb-3">{service.price}</h6>
                    <button className="btn btn-outline-primary">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Our Work Gallery</h2>
            <p className="lead text-muted">
              Showcase of our amazing transformations
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="text-center mb-4">
            <div className="btn-group" role="group">
              <button
                className={`btn ${
                  activeTab === "all" ? "btn-primary" : "btn-outline-primary"
                }`}
                onClick={() => setActiveTab("all")}
              >
                All
              </button>
              <button
                className={`btn ${
                  activeTab === "haircuts"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveTab("haircuts")}
              >
                Haircuts
              </button>
              <button
                className={`btn ${
                  activeTab === "coloring"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveTab("coloring")}
              >
                Coloring
              </button>
              <button
                className={`btn ${
                  activeTab === "styling"
                    ? "btn-primary"
                    : "btn-outline-primary"
                }`}
                onClick={() => setActiveTab("styling")}
              >
                Styling
              </button>
            </div>
          </div>

          <div className="row g-3">
            {filteredImages.map((image, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-sm-6">
                <img
                  src={image.src}
                  alt="Gallery Image"
                  className="img-fluid gallery-img shadow-sm w-100"
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="lead text-muted">
              Real reviews from satisfied customers
            </p>
          </div>

          <div className="row g-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-lg-4">
                <div className="card testimonial-card h-100 shadow-sm p-4">
                  <div className="card-body text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle mb-3"
                      style={{
                        width: "80px",
                        height: "80px",
                        objectFit: "cover",
                      }}
                    />
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-warning"
                          size={20}
                          fill="currentColor"
                        />
                      ))}
                    </div>
                    <p className="card-text mb-3">"{testimonial.text}"</p>
                    <h6 className="card-title text-primary">
                      {testimonial.name}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Contact Us</h2>
            <p className="lead text-muted">
              Get in touch to book your appointment
            </p>
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <div className="contact-info p-4 h-100">
                <h4 className="mb-4">Get In Touch</h4>

                <div className="d-flex align-items-center mb-3">
                  <Phone className="text-primary me-3" size={24} />
                  <div>
                    <h6 className="mb-0">Phone</h6>
                    <p className="mb-0 text-muted">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <Mail className="text-primary me-3" size={24} />
                  <div>
                    <h6 className="mb-0">Email</h6>
                    <p className="mb-0 text-muted">info@glamourhairsalon.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <MapPin className="text-primary me-3" size={24} />
                  <div>
                    <h6 className="mb-0">Address</h6>
                    <p className="mb-0 text-muted">
                      123 Beauty Street, City, State 12345
                    </p>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <Clock className="text-primary me-3" size={24} />
                  <div>
                    <h6 className="mb-0">Hours</h6>
                    <p className="mb-0 text-muted">
                      Mon-Sat: 9AM-7PM, Sun: 10AM-5PM
                    </p>
                  </div>
                </div>

                <div className="d-flex gap-3">
                  <Instagram className="text-primary" size={24} />
                  <Facebook className="text-primary" size={24} />
                  <Twitter className="text-primary" size={24} />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-info p-4">
                <h4 className="mb-4">Book Appointment</h4>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <select
                      className="form-select"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="Haircut & Styling">
                        Haircut & Styling
                      </option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Hair Treatment">Hair Treatment</option>
                      <option value="Bridal Styling">Bridal Styling</option>
                      <option value="Hair Extensions">Hair Extensions</option>
                      <option value="Beard Styling">Beard Styling</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Special Requests"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "📧 Sending..." : "📅 Book Appointment"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-4 text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex align-items-center">
                <Scissors className="me-2" size={24} />
                <span className="h5 mb-0">Glamour Hair Salon</span>
              </div>
              <p className="mt-2 mb-0 text-muted">
                Transform your look with our expert care
              </p>
            </div>
            <div className="col-md-6 text-md-end mt-3 mt-md-0">
              <p className="mb-0 text-muted">
                &copy; 2025 Glamour Hair Salon. All rights reserved.
              </p>
            </div>
          </div>

          <p
            className="mt-4 text-center"
            style={{ fontSize: "0.85rem", color: "#aaa" }}
          >
            Developed by <strong>Pragnesh Maru ❤️</strong> as a Software
            Developer
            <br />
            Connect with me via email:{" "}
            <a href="mailto:pragneshmaru12112001@gmail.com">
              pragneshmaru12112001@gmail.com
            </a>
          </p>
        </div>
      </footer>

      {/* Bootstrap JS */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </div>
  );
};

export default HairSalonWebsite;
