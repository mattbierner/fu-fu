import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Form } from './components/form';
import { Header } from './components/Header';
import * as config from './config';
import { Model } from './model/model';
import { theme } from './theme';

class App extends React.Component<{}, { model: Model }> {
    constructor(props: {}) {
        super(props);

        this.state = {
            model: Model.empty
        }
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Header />
                    <Form
                        model={this.state.model}
                        updateModel={this.updateModel.bind(this)}
                        onLaunch={this.launch.bind(this)} />
                    <Footer />
                </div>
            </ThemeProvider>
        );
    }

    private updateModel(newModel: Model) {
        this.setState({ model: newModel })
    }

    private launch(model: Model): void {
        const text = model.toTweet();
        if (config.debug) {
            console.log(text);
        } else {
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`)
        }
    }
}

export default App;
