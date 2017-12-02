/**
 * Asynchronously loads the component for HomePage
 */
import Loadable from 'react-loadable';// 用动态导入加载组件的更高阶组件

import LoadingIndicator from 'components/LoadingIndicator';

export default Loadable({
  loader: () => import('./index'),
  loading: LoadingIndicator,
});
