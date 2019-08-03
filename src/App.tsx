import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'tui-image-editor/dist/tui-image-editor.css'
import ImageEditor from '@toast-ui/react-image-editor'
const myTheme = {
  // Theme object to extends default dark theme.
};

const MyComponent = () => (
  <ImageEditor
    includeUI={{
      loadImage: {
        path: logo,
        name: 'SampleImage'
      },
      theme: myTheme,
      menu: ['shape', 'filter'],
      initMenu: 'filter',
      uiSize: {
        width: '1000px',
        height: '700px'
      },
      menuBarPosition: 'bottom'
    }}
    cssMaxHeight={500}
    cssMaxWidth={700}
    selectionStyle={{
      cornerSize: 20,
      rotatingPointOffset: 70
    }}
    usageStatistics={true}
  />
);

const App: React.FC = () => {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
