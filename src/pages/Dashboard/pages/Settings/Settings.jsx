import React, { Component } from 'react'

export default class Settings extends Component {
    state = {
        theme: 'dark'
    }

    setAutomaticTheme(value) {
        if(value !== 'automatic') return;

        var hour = new Date().getHours()
        console.log(hour)

        if (hour >= 6 && hour <= 18) {
            document.documentElement.className = "theme-light";
        } else {
            document.documentElement.className = "theme-dark";
        }
    }

    componentDidMount() {
        setInterval(() => this.setAutomaticTheme(this.state.theme), 60000);
    }

    changeTheme(e) {
        this.setState({
            theme: e.target.value
        })

        switch (e.target.value) {
            case "light":
                document.documentElement.className = "theme-light";
                break;
            case "dark":
                document.documentElement.className = "theme-dark";
                break;
            case "automatic":
                this.setAutomaticTheme(e.target.value);
                break;
            default:
                break;
        }

        localStorage.setItem('theme', e.target.value)
    }

  render() {
    return (
      <div>
        <h1>Settings</h1>
        <label htmlFor="theme">Theme:</label>
        <select name='theme' onChange={(e) => this.changeTheme(e)} value={this.state.theme}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
            <option value="automatic">Automatic</option>
        </select>
      </div>
    )
  }
}
