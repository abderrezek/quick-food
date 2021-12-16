import { h } from "preact";

const Csrf = ({ value }) => <input type="hidden" name="_token" value={value} />;

export default Csrf;