function Spa(){

  return (
      <HashRouter>
          <div>
          <NavBar />
          <UserContext.Provider value={{users:[{name:"molly",email:"molly@mit.edu",password:"passcode",balance:0}]}}>
              <div className="container" style={{padding: "20px"}}>
              <Route exact path='/' component={Home} />
              <Route path='/login' component={Login} />
              <Route path='/createaccount' component={CreateAccount} />
              <Route path='/deposit' component={Deposit} />
              <Route path='/withdraw' component={Withdraw} />
              <Route path="/balance/" component={Balance} />
              <Route path='/alldata' component={AllData} />
              </div>
          </UserContext.Provider>
          </div>
      </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
)
