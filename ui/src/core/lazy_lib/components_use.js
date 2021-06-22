import {
  ConfigProvider,
  Layout,
  Input,
  InputNumber,
  Button,
  Switch,
  Radio,
  Checkbox,
  Select,
  Card,
  Form,
  Row,
  Col,
  Modal,
  Table,
  Tabs,
  Icon,
  Badge,
  Popover,
  Dropdown,
  List,
  Avatar,
  Breadcrumb,
  Steps,
  Spin,
  Menu,
  Drawer,
  Tooltip,
  Alert,
  Tag,
  Divider,
  DatePicker,
  TimePicker,
  Upload,
  Progress,
  Skeleton,
  Popconfirm,
  Descriptions,
  message,
  notification,
  Affix,
  Timeline,
  Pagination,
  Comment,
  Tree,
  Calendar,
  Slider,
  AutoComplete,
  Collapse
} from 'ant-design-vue'

export default {
  install: (app) => {
    app.config.globalProperties.$confirm = Modal.confirm
    app.config.globalProperties.$message = message
    app.config.globalProperties.$notification = notification
    app.config.globalProperties.$info = Modal.info
    app.config.globalProperties.$success = Modal.success
    app.config.globalProperties.$error = Modal.error
    app.config.globalProperties.$warning = Modal.warning

    app.use(ConfigProvider)
    app.use(Layout)
    app.use(Input)
    app.use(InputNumber)
    app.use(Button)
    app.use(Switch)
    app.use(Radio)
    app.use(Checkbox)
    app.use(Select)
    app.use(Card)
    app.use(Form)
    app.use(Row)
    app.use(Col)
    app.use(Modal)
    app.use(Table)
    app.use(Tabs)
    app.use(Icon)
    app.use(Badge)
    app.use(Popover)
    app.use(Dropdown)
    app.use(List)
    app.use(Avatar)
    app.use(Breadcrumb)
    app.use(Steps)
    app.use(Spin)
    app.use(Menu)
    app.use(Drawer)
    app.use(Tooltip)
    app.use(Alert)
    app.use(Tag)
    app.use(Divider)
    app.use(DatePicker)
    app.use(TimePicker)
    app.use(Upload)
    app.use(Progress)
    app.use(Skeleton)
    app.use(Popconfirm)
    // app.use(Notification)
    app.use(Affix)
    app.use(Timeline)
    app.use(Pagination)
    app.use(Comment)
    app.use(Tree)
    app.use(Calendar)
    app.use(Slider)
    app.use(AutoComplete)
    app.use(Collapse)
    app.use(Descriptions)
  }
}
