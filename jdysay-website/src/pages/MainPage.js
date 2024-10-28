import React from 'react';
import Header from '../components/Header';
import './Main.css';

function MainPage() {
    return (
        <div className="main-page">
            <Header title="Jaycie Say" className="header">
                <main>
                    <p>bio</p>
                </main>
            </Header>
        </div>
    );
}

export default MainPage;