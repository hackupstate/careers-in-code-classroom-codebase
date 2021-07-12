import './App.css';
import {Card, Form, Select} from "antd";
import Layout, {Content, Footer, Header} from "antd/es/layout/layout";
import {useState} from "react";

const languages = [
    'python',
    'go',
    'javascript',
    'typescript',
    'php',
    'ruby',
    'rust'
]

function App() {
    const [favoriteLanguage, setFavoriteLanguage] = useState();

    return (
        <Layout>
            <Header>
                <p style={{color: "white", fontSize: 30}}>
                    Tricky Cypress
                </p>
            </Header>
            <Layout>
                <Content style={{padding: '0 50px'}}>
                    <br />
                    <Card>
                        <Form>
                            <Form.Item label="Whats your favorite programming language">
                                <Select defaultValue={languages[0]} onChange={(value) => setFavoriteLanguage(value)}>
                                    {languages.map(language =>
                                        <Select.Option key={language} value={language}>
                                            {language}
                                        </Select.Option>
                                    )}
                                </Select>
                            </Form.Item>
                        </Form>
                    </Card>
                </Content>
            </Layout>
            <Footer/>
        </Layout>
    );
}

export default App;
