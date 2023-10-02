import Script from "next/script";

const CalendlyWidget = ({ username }) => {
    return (
    <>
      <div
        className="calendly-inline-widget"
        style={{ minWidth: "320px", height: "580px" }}
        data-url={`https://calendly.com/${username}`}
      />

      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </>
  );
};
export default CalendlyWidget;
