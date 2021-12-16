import { h } from "preact";

export const Button = ({ type="submit", btnType="primary", title, isLoading, ...rest }) => {
    let loading = null;
    let classes = "btn";
    switch (btnType) {
        case "primary":
            classes += ` btn-primary`
            break;
        case "danger":
            classes += ` btn-danger`
            break;
    }
    if (isLoading) {
        classes += " disabled";
        loading = <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>;
    }

    return (
        <button class={classes} type={type} {...rest}>
            {loading}{" "}{title}
        </button>
    );
};