import classes from "../styles/components/Label.module.css";

const Label = ({ Icon, text }) => {
  return (
    <div className={classes.label}>
      <div className={classes.label_icon}>{Icon}</div>
      <h5 className={`color-tertiary ${classes.label_text}`}>{text}</h5>
    </div>
  );
};

export default Label;
