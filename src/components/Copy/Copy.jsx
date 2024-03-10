function Copy({ data }) {
    return (
        <div>
        {/* <div className="items"> */}
            {data.map((item, index) => (
                <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Copy;
