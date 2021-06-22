import {
  SafetyOutlined,
  UserOutlined,
  LockOutlined,
  BlockOutlined,
  AuditOutlined,
  TranslationOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
  ClockCircleOutlined,
  ProjectOutlined,
  LoadingOutlined,
  BellOutlined,
  GithubOutlined,
  DashboardOutlined,
  TeamOutlined,
  ScheduleOutlined,
  FlagOutlined,
  DesktopOutlined,
  BankOutlined,
  ReadOutlined,
  FilterOutlined,
  HomeOutlined,
  UserAddOutlined,
  SyncOutlined,
  EditOutlined,
  PlusOutlined,
  MoreOutlined,
  SafetyCertificateOutlined,
  DeleteOutlined,
  PauseCircleOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  RocketOutlined,
  BulbOutlined,
  IdcardOutlined,
  GlobalOutlined,
  ClusterOutlined,
  DeploymentUnitOutlined,
  GatewayOutlined,
  WifiOutlined,
  DatabaseOutlined,
  HddOutlined,
  BarcodeOutlined,
  CloudUploadOutlined,
  CloudOutlined,
  PictureOutlined,
  SwapOutlined,
  KeyOutlined,
  GoldOutlined,
  EnvironmentOutlined,
  ApiOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  ReloadOutlined
} from '@ant-design/icons-vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faCentos, faUbuntu, faSuse, faRedhat, faFedora, faLinux, faFreebsd, faApple, faWindows, faJava } from '@fortawesome/free-brands-svg-icons'
import { faLanguage, faCompactDisc, faCameraRetro } from '@fortawesome/free-solid-svg-icons'

library.add(faCentos, faUbuntu, faSuse, faRedhat, faFedora, faLinux, faFreebsd, faApple, faWindows, faJava)
library.add(faLanguage, faCompactDisc, faCameraRetro)

export default {
  install: (app) => {
    app.component('font-awesome-icon', FontAwesomeIcon)

    app.component('SafetyOutlined', SafetyOutlined)
    app.component('UserOutlined', UserOutlined)
    app.component('LockOutlined', LockOutlined)
    app.component('BlockOutlined', BlockOutlined)
    app.component('AuditOutlined', AuditOutlined)
    app.component('TranslationOutlined', TranslationOutlined)
    app.component('MenuFoldOutlined', MenuFoldOutlined)
    app.component('MenuUnfoldOutlined', MenuUnfoldOutlined)
    app.component('LogoutOutlined', LogoutOutlined)
    app.component('QuestionCircleOutlined', QuestionCircleOutlined)
    app.component('ClockCircleOutlined', ClockCircleOutlined)
    app.component('ProjectOutlined', ProjectOutlined)
    app.component('LoadingOutlined', LoadingOutlined)
    app.component('BellOutlined', BellOutlined)
    app.component('GithubOutlined', GithubOutlined)
    app.component('DashboardOutlined', DashboardOutlined)
    app.component('TeamOutlined', TeamOutlined)
    app.component('ScheduleOutlined', ScheduleOutlined)
    app.component('FlagOutlined', FlagOutlined)
    app.component('DesktopOutlined', DesktopOutlined)
    app.component('BankOutlined', BankOutlined)
    app.component('ReadOutlined', ReadOutlined)
    app.component('FilterOutlined', FilterOutlined)
    app.component('HomeOutlined', HomeOutlined)
    app.component('UserAddOutlined', UserAddOutlined)
    app.component('SyncOutlined', SyncOutlined)
    app.component('EditOutlined', EditOutlined)
    app.component('PlusOutlined', PlusOutlined)
    app.component('MoreOutlined', MoreOutlined)
    app.component('SafetyCertificateOutlined', SafetyCertificateOutlined)
    app.component('DeleteOutlined', DeleteOutlined)
    app.component('PauseCircleOutlined', PauseCircleOutlined)
    app.component('AppstoreOutlined', AppstoreOutlined)
    app.component('BulbOutlined', BulbOutlined)
    app.component('CalendarOutlined', CalendarOutlined)
    app.component('RocketOutlined', RocketOutlined)
    app.component('IdcardOutlined', IdcardOutlined)
    app.component('GlobalOutlined', GlobalOutlined)
    app.component('ClusterOutlined', ClusterOutlined)
    app.component('DeploymentUnitOutlined', DeploymentUnitOutlined)
    app.component('GatewayOutlined', GatewayOutlined)
    app.component('WifiOutlined', WifiOutlined)
    app.component('DatabaseOutlined', DatabaseOutlined)
    app.component('HddOutlined', HddOutlined)
    app.component('BarcodeOutlined', BarcodeOutlined)
    app.component('CloudUploadOutlined', CloudUploadOutlined)
    app.component('CloudOutlined', CloudOutlined)
    app.component('PictureOutlined', PictureOutlined)
    app.component('SwapOutlined', SwapOutlined)
    app.component('KeyOutlined', KeyOutlined)
    app.component('GoldOutlined', GoldOutlined)
    app.component('EnvironmentOutlined', EnvironmentOutlined)
    app.component('ApiOutlined', ApiOutlined)
    app.component('ArrowUpOutlined', ArrowUpOutlined)
    app.component('ArrowDownOutlined', ArrowDownOutlined)
    app.component('ReloadOutlined', ReloadOutlined)
  }
}
