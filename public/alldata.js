function AllData(){
    const [data, setData] = React.useState('');    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));                
            });

    }, []);

    return (<>
        <img src="./pigbank.jpg" className="img-fluid" alt="Responsive image" width="100"/>
        <h5>All Data in Store:</h5>
        {data}
    </>);
}
