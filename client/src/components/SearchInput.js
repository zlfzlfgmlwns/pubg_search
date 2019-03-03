import React, { Component } from 'react';

class SearchInput extends Component {
    state = {
        searchValue:'samingizzang'
    }
    handleClickEv = () => {
        this.callAPI();
    }
    handleChangeValue = (e)=> {
        this.setState({
            searchValue : e.target.value
        })
    }
    callAPI = async () => {
        const response = await fetch('/api/playerData?userName='+this.state.searchValue);
        const body = await response.json();

        console.log(body)
       
  
    }
    render() {
        return (
            <div>
                <input type="text" placeholder="검색하세요" value="samingizzang" onChange={this.handleChangeValue}></input>
                <button onClick={this.handleClickEv}>검색하기</button>
            </div>
        );
    }
}

export default SearchInput;