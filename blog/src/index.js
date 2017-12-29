import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/React'));
app.model(require('./models/ReactNative'));
app.model(require('./models/Angular'));
app.model(require('./models/JavaScript'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
