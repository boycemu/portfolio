export default function Contact() {
  return (
    <section className="contact" id="contact">
      <video className="contact-bg" src={import.meta.env.BASE_URL + "contact-bg.mp4"} autoPlay muted loop playsInline />
      <div className="contact-overlay" />
      <div className="container" style={{ width: '100%' }}>
        <div className="eyebrow reveal"><span className="num">04</span> CONTACT · 联系我</div>
        <h2 className="reveal contact-title">
          有项目？<br />
          <span className="stroke">LET'S TALK</span>
        </h2>

        <div className="contact-methods reveal">
          <div className="method-cell">
            <div className="k">WECHAT</div>
            <div className="v">mc0828x</div>
          </div>
          <div className="method-cell">
            <div className="k">PHONE</div>
            <div className="v">187 1032 1786</div>
          </div>
          <div className="method-cell">
            <div className="k">LOCATION</div>
            <div className="v">陕西 · 西安</div>
          </div>
          <div className="method-cell">
            <div className="k">EMAIL</div>
            <div className="v">cxcyboyce828@163.com</div>
          </div>
        </div>

        <div className="footer-bar">
          <span>© 2026 MU HONGWEI. ALL RIGHTS RESERVED.</span>
          <span>DESIGNED & BUILT BY MU HONGWEI</span>
        </div>
      </div>
    </section>
  )
}
