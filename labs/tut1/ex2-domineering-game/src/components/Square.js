const Square = ({ value, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                width: 50,
                height: 50,
                boxSizing: "border-box",
                border: "1px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 20,
                cursor: "pointer",
                backgroundColor: value === "V" ? "lightblue" : value === "H" ? "lightgreen" : "white",
            }}
        >
            {value}
        </div>
    );
};
export default Square;