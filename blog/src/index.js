/**
 *Copyright and author - wanghuajian
 */
import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/react'));
app.model(require('./models/reactnative'));
app.model(require('./models/angular'));
app.model(require('./models/javascript'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
