import Reveal from '../ui/Reveal';

export default function Features() {
  return (
    <section className="feat">
      <Reveal>
        <svg width="18" viewBox="0 0 18 18" stroke="#0b57d0" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M2 14l4-5M8 8l1-6M12 10l5-3" />
        </svg>
        <h2>The Way<br />I Work!</h2>
        <p>Try a variety of benefits when using my services.</p>
      </Reveal>
      <div className="fl">
        <Reveal className="fi" delay={1}>
          <div className="ic">🌍</div><h3>Lots Of Choices</h3>
          <p>Web, mobile and backend stacks that fit your product, built to work anytime and anywhere.</p>
        </Reveal>
        <Reveal className="fi" delay={2}>
          <div className="ic">🧰</div><h3>Best Code Guide</h3>
          <p>Clean architecture and clear docs ready to guide your team at any stage of the project.</p>
        </Reveal>
        <Reveal className="fi" delay={3}>
          <div className="ic" style={{ background: '#2b63e0', color: '#fff', fontSize: 15 }}>✈</div><h3>Easy Booking</h3>
          <p>An easy, safe and fast process to book your project slot and get started.</p>
        </Reveal>
      </div>
    </section>
  );
}
