import { h } from "preact";

export const classError = (name, errors) => name in errors ? "form-control is-invalid" : "form-control";

export const classErrorCheckBox = (name, errors) => name in errors ? "form-check-input is-invalid" : "form-check-input";

export const showError = (name, errors) => {
    if (!(name in errors)) return null;

    return (
        <div class="invalid-feedback">
            {errors[name]}
        </div>
    );
};