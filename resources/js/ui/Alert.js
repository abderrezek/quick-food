import { h } from "preact";

const Alert = ({ msgs, type, dismissing }) => {
    let button = null;
    let classes = `alert alert-${type}`;
    if (dismissing) {
        classes += ' alert-dismissible fade show';
        button = <button type="button" className="btn-close" dataBsDismiss="alert" ariaLabel="Close"></button>
    }
    return (
        msgs !== null ? (
            <div className={classes} role="alert">
                {msgs}
                {button}
            </div>
        ) : null
    );
};

export const Success = ({ responces, dismissing=false }) => <Alert type="success" msgs={responces} dismissing={dismissing} />;

export const Errors = ({ errors, dismissing=false }) => <Alert type="danger" msgs={errors} dismissing={dismissing} />;
