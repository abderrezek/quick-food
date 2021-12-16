import { h } from "preact";

const Method = ({ name }) => <input type="hidden" name="_method" value={name} />;

export default Method;