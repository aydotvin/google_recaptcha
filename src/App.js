import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const captchaSiteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";

const App = () => {
	const captchaElement = useRef(null);
	const [disableButton, setDisableButton] = useState(true);

	const handleCaptchaChange = (ev) => {
		console.log(ev);
		setDisableButton(false);
	};
	const handleCaptchaExpiry = (ev) => {
		console.log(ev);
		setDisableButton(true);
	};

	return (
		<div>
			<h2>Google recaptcha test</h2>
			<ReCAPTCHA ref={captchaElement} sitekey={captchaSiteKey} onChange={handleCaptchaChange} onExpired={handleCaptchaExpiry} />
			<button disabled={disableButton} style={{ marginTop: "10px" }}>
				Submit
			</button>
		</div>
	);
};

export default App;
