// Robot Management System - Task Module Script
    
// DOM Elements
const taskListPage = document.getElementById('task-list-page');
const taskDetailsPage = document.getElementById('task-details-page');
const backToListBtn = document.getElementById('back-to-list');
const viewDetailsBtns = document.querySelectorAll('.btn-view-details');
const taskRows = document.querySelectorAll('.task-row');
const languageBtn = document.getElementById('languageBtn');
const languageDropdown = document.getElementById('languageDropdown');
const languageOptions = document.querySelectorAll('.language-dropdown a');

// Device Module Elements
const deviceListPage = document.getElementById('device-list-page');
const deviceDetailsPage = document.getElementById('device-details-page');
const backToDeviceListBtn = document.getElementById('back-to-device-list');
const deviceRows = document.querySelectorAll('.device-row');
const devicesNav = document.querySelector('.devices-nav');
const tasksNav = document.querySelector('.nav ul li a.active');

// Translation objects
const translations = {
    en: {
        'sidebar-title': 'Robot Management System',
        'nav-tasks': 'Tasks',
        'nav-robots': 'Robots',
        'nav-dashboard': 'Dashboard',
        'nav-reports': 'Reports',
        'nav-devices': 'Devices',
        'task-list-title': 'Task List',
        'btn-add-task': 'Add New Task',
        'btn-refresh': 'Refresh',
        'search-placeholder': 'Search tasks...',
        'device-list-title': 'Device List',
        'btn-add-device': 'Add New Device',
        'search-devices-placeholder': 'Search devices...',
        'table-device-id': 'Device ID',
        'table-device-name': 'Device Name',
        'table-type': 'Type',
        'table-model': 'Model',
        'table-brand': 'Brand',
        'table-status': 'Status',
        'table-battery': 'Battery',
        'table-current-task': 'Current Task',
        'table-location': 'Location',
        'table-ip': 'IP Address',
        'device-details-title': 'Device Details',
        'btn-back-device-list': '← Back to Device List',
        'info-device-id': 'Device ID:',
        'info-device-name': 'Device Name:',
        'info-type': 'Type:',
        'info-model': 'Model:',
        'info-brand': 'Brand:',
        'info-base-status': 'Base Status:',
        'info-run-status': 'Run Status:',
        'info-drive-type': 'Drive Type:',
        'info-current-task': 'Current Task:',
        'info-location': 'Location:',
        'info-map-code': 'Map Code:',
        'info-localization': 'Localization Value:',
        'info-current-marker': 'Current Marker:',
        'info-ip': 'IP Address:',
        'info-mac': 'MAC Address:',
        'info-firmware': 'Firmware Version:',
        'info-battery': 'Battery Level:',
        'info-last-maintenance': 'Last Maintenance:',
        'info-next-maintenance': 'Next Maintenance:',
        'btn-edit-device': 'Edit Device',
        'btn-reboot': 'Reboot',
        'device-status-title': 'Device Status',
        'status-connection': 'Connection:',
        'status-cpu': 'CPU Usage:',
        'status-memory': 'Memory Usage:',
        'status-disk': 'Disk Usage:',
        'activity-title': 'Recent Activity',
        'table-time': 'Time',
        'table-activity': 'Activity',
        'table-details': 'Details',
        'filter-status': 'All Statuses',
        'filter-robot': 'All Robots',
        'table-task-id': 'Task ID',
        'table-task-type': 'Task Type',
        'table-task-name': 'Task Name',
        'table-status': 'Status',
        'table-robot': 'Robot',
        'table-location': 'Current Location',
        'table-eta': 'ETA',
        'table-priority': 'Priority',
        'table-actions': 'Actions',
        'btn-view-details': 'View Details',
        'btn-delete': 'Delete',
        'task-details-title': 'Task Details',
        'btn-back': '← Back to Task List',
        'info-task-id': 'Task ID:',
        'info-task-type': 'Task Type:',
        'info-task-name': 'Task Name:',
        'info-status': 'Status:',
        'info-priority': 'Priority:',
        'info-robot': 'Robot:',
        'info-location': 'Current Location:',
        'info-eta': 'ETA:',
        'info-start-time': 'Start Time:',
        'info-duration': 'Estimated Duration:',
        'info-progress': 'Progress:',
        'location-title': 'Current Robot Location',
        'steps-title': 'Task Steps',
        'steps-step': 'Step',
        'steps-status': 'Status',
        'steps-start': 'Start Time',
        'steps-end': 'End Time',
        'steps-duration': 'Duration',
        'steps-details': 'Details',
        'footer': '© 2026 Robot Management System',
        'status-pending': 'Pending',
        'status-assigned': 'Assigned',
        'status-en-route': 'En Route',
        'status-executing': 'Executing',
        'status-completed': 'Completed',
        'status-failed': 'Failed',
        'status-cancelled': 'Cancelled',
        'priority-high': 'High',
        'priority-normal': 'Normal',
        'priority-low': 'Low',
        'basic-info-title': 'Basic Information',
        'real-time-info-title': 'Real-time Information',
        'static-specs-title': 'Static Specifications',
        'statistics-title': 'Statistics',
        'connection-mission': 'Connection & Mission',
        'location': 'Location',
        'battery-power': 'Battery & Power',
        'movement-safety': 'Movement & Safety',
        'connection-state': 'Connection State:',
        'current-mission': 'Current Mission:',
        'current-location': 'Current Location:',
        'coordinates': 'Coordinates:',
        'state-of-charge': 'State of Charge:',
        'battery-status': 'Status:',
        'time-remaining': 'Time Remaining:',
        'temperature': 'Temperature:',
        'current-speed': 'Current Speed:',
        'direction': 'Direction:',
        'safety-status': 'Safety Status:',
        'e-stop': 'E-Stop:',
        'physical-dimensions': 'Physical Dimensions',
        'operational-capabilities': 'Operational Capabilities',
        'interfaces-connectivity': 'Interfaces & Connectivity',
        'length-width-height': 'Length x Width x Height:',
        'turn-radius': 'Turn Radius:',
        'max-speed-laden': 'Max Speed (Laden):',
        'max-speed-unladen': 'Max Speed (Unladen):',
        'max-payload': 'Max Payload:',
        'lift-height': 'Lift Height:',
        'communication-protocol': 'Communication Protocol:',
        'io-ports': 'I/O Ports:',
        'odometry-data': 'Odometry Data',
        'performance-metrics': 'Performance Metrics',
        'total-distance': 'Total Distance Traveled:',
        'total-operating-time': 'Total Operating Time:',
        'average-speed': 'Average Speed:',
        'mission-success-rate': 'Mission Success Rate:',
        'average-mission-time': 'Average Mission Time:',
        'maintenance-intervals': 'Maintenance Intervals:'
    },
    zh: {
        'sidebar-title': '机器人调度系统',
        'nav-tasks': '任务',
        'nav-robots': '机器人',
        'nav-dashboard': '仪表盘',
        'nav-reports': '报告',
        'nav-devices': '设备',
        'task-list-title': '任务列表',
        'btn-add-task': '添加新任务',
        'btn-refresh': '刷新',
        'search-placeholder': '搜索任务...',
        'device-list-title': '设备列表',
        'btn-add-device': '添加新设备',
        'search-devices-placeholder': '搜索设备...',
        'table-device-id': '设备ID',
        'table-device-name': '设备名称',
        'table-type': '类型',
        'table-model': '型号',
        'table-brand': '品牌',
        'table-status': '状态',
        'table-battery': '电量',
        'table-current-task': '当前任务',
        'table-location': '位置',
        'table-ip': 'IP地址',
        'device-details-title': '设备详情',
        'btn-back-device-list': '← 返回设备列表',
        'info-device-id': '设备ID:',
        'info-device-name': '设备名称:',
        'info-type': '类型:',
        'info-model': '型号:',
        'info-brand': '品牌:',
        'info-base-status': '基本状态:',
        'info-run-status': '运行状态:',
        'info-drive-type': '调度状态:',
        'info-current-task': '当前任务:',
        'info-location': '位置:',
        'info-map-code': '地图编号:',
        'info-localization': '定位置信度:',
        'info-current-marker': '当前点位:',
        'info-ip': 'IP地址:',
        'info-mac': 'MAC地址:',
        'info-firmware': '固件版本:',
        'info-battery': '电池电量:',
        'info-last-maintenance': '上次维护:',
        'info-next-maintenance': '下次维护:',
        'btn-edit-device': '编辑设备',
        'btn-reboot': '重启',
        'device-status-title': '设备状态',
        'status-connection': '连接:',
        'status-cpu': 'CPU使用率:',
        'status-memory': '内存使用率:',
        'status-disk': '磁盘使用率:',
        'activity-title': '最近活动',
        'table-time': '时间',
        'table-activity': '活动',
        'table-details': '详情',
        'filter-status': '所有状态',
        'filter-robot': '所有机器人',
        'table-task-id': '履约单编号',
        'table-task-type': '履约单类型',
        'table-task-name': '任务名称',
        'table-status': '状态',
        'table-robot': '机器人',
        'table-location': '当前位置',
        'table-eta': '预计完成时间',
        'table-priority': '优先级',
        'table-actions': '操作',
        'btn-view-details': '查看详情',
        'btn-delete': '删除',
        'task-details-title': '任务详情',
        'btn-back': '← 返回任务列表',
        'info-task-id': '履约单编号:',
        'info-task-type': '履约单类型:',
        'info-task-name': '任务名称:',
        'info-status': '状态:',
        'info-priority': '优先级:',
        'info-robot': '机器人:',
        'info-location': '当前位置:',
        'info-eta': '预计完成时间:',
        'info-start-time': '开始时间:',
        'info-duration': '预计持续时间:',
        'info-progress': '进度:',
        'location-title': '机器人当前位置',
        'steps-title': '任务步骤',
        'steps-step': '步骤',
        'steps-status': '状态',
        'steps-start': '开始时间',
        'steps-end': '结束时间',
        'steps-duration': '持续时间',
        'steps-details': '详情',
        'footer': '© 2026 机器人调度系统',
        'status-pending': '待处理',
        'status-assigned': '已分配',
        'status-en-route': '在途中',
        'status-executing': '执行中',
        'status-completed': '已完成',
        'status-failed': '失败',
        'status-cancelled': '已取消',
        'priority-high': '高',
        'priority-normal': '正常',
        'priority-low': '低',
        'basic-info-title': '基本信息',
        'real-time-info-title': '实时信息',
        'static-specs-title': '静态规格',
        'statistics-title': '统计数据',
        'connection-mission': '连接与任务',
        'location': '位置',
        'battery-power': '电池与电源',
        'movement-safety': '移动与安全',
        'connection-state': '连接状态:',
        'current-mission': '当前任务:',
        'current-location': '当前位置:',
        'coordinates': '坐标:',
        'state-of-charge': '电量:',
        'battery-status': '状态:',
        'time-remaining': '剩余时间:',
        'temperature': '温度:',
        'current-speed': '当前速度:',
        'direction': '方向:',
        'safety-status': '安全状态:',
        'e-stop': '急停:',
        'physical-dimensions': '物理尺寸',
        'operational-capabilities': '操作能力',
        'interfaces-connectivity': '接口与连接',
        'length-width-height': '长x宽x高:',
        'turn-radius': '转弯半径:',
        'max-speed-laden': '满载最大速度:',
        'max-speed-unladen': '空载最大速度:',
        'max-payload': '最大载重:',
        'lift-height': '提升高度:',
        'communication-protocol': '通信协议:',
        'io-ports': 'I/O端口:',
        'odometry-data': '里程数据',
        'performance-metrics': '性能指标',
        'total-distance': '总行驶距离:',
        'total-operating-time': '总运行时间:',
        'average-speed': '平均速度:',
        'mission-success-rate': '任务成功率:',
        'average-mission-time': '平均任务时间:',
        'maintenance-intervals': '维护周期:'
    },
    ja: {
        'sidebar-title': 'ロボット管理システム',
        'nav-tasks': 'タスク',
        'nav-robots': 'ロボット',
        'nav-dashboard': 'ダッシュボード',
        'nav-reports': 'レポート',
        'nav-devices': 'デバイス',
        'task-list-title': 'タスクリスト',
        'btn-add-task': '新しいタスクを追加',
        'btn-refresh': '更新',
        'search-placeholder': 'タスクを検索...',
        'device-list-title': 'デバイスリスト',
        'btn-add-device': '新しいデバイスを追加',
        'search-devices-placeholder': 'デバイスを検索...',
        'table-device-id': 'デバイスID',
        'table-device-name': 'デバイス名',
        'table-type': 'タイプ',
        'table-model': 'モデル',
        'table-brand': 'ブランド',
        'table-status': 'ステータス',
        'table-battery': 'バッテリー',
        'table-current-task': '現在のタスク',
        'table-location': '場所',
        'table-ip': 'IPアドレス',
        'device-details-title': 'デバイスの詳細',
        'btn-back-device-list': '← デバイスリストに戻る',
        'info-device-id': 'デバイスID:',
        'info-device-name': 'デバイス名:',
        'info-type': 'タイプ:',
        'info-model': 'モデル:',
        'info-brand': 'ブランド:',
        'info-base-status': '基本ステータス:',
        'info-run-status': '実行ステータス:',
        'info-drive-type': '駆動タイプ:',
        'info-current-task': '現在のタスク:',
        'info-location': '場所:',
        'info-map-code': 'マップコード:',
        'info-localization': 'ローカリゼーション値:',
        'info-current-marker': '現在のマーカー:',
        'info-ip': 'IPアドレス:',
        'info-mac': 'MACアドレス:',
        'info-firmware': 'ファームウェアバージョン:',
        'info-battery': 'バッテリーレベル:',
        'info-last-maintenance': '最終メンテナンス:',
        'info-next-maintenance': '次のメンテナンス:',
        'btn-edit-device': 'デバイスを編集',
        'btn-reboot': '再起動',
        'device-status-title': 'デバイスステータス',
        'status-connection': '接続:',
        'status-cpu': 'CPU使用率:',
        'status-memory': 'メモリ使用率:',
        'status-disk': 'ディスク使用率:',
        'activity-title': '最近のアクティビティ',
        'table-time': '時間',
        'table-activity': 'アクティビティ',
        'table-details': '詳細',
        'filter-status': 'すべてのステータス',
        'filter-robot': 'すべてのロボット',
        'table-task-id': 'タスクID',
        'table-task-type': 'タスクタイプ',
        'table-task-name': 'タスク名',
        'table-status': 'ステータス',
        'table-robot': 'ロボット',
        'table-location': '現在の場所',
        'table-eta': '到着予定時間',
        'table-priority': '優先度',
        'table-actions': 'アクション',
        'btn-view-details': '詳細を表示',
        'btn-delete': '削除',
        'task-details-title': 'タスクの詳細',
        'btn-back': '← タスクリストに戻る',
        'info-task-id': 'タスクID:',
        'info-task-type': 'タスクタイプ:',
        'info-task-name': 'タスク名:',
        'info-status': 'ステータス:',
        'info-priority': '優先度:',
        'info-robot': 'ロボット:',
        'info-location': '現在の場所:',
        'info-eta': '到着予定時間:',
        'info-start-time': '開始時間:',
        'info-duration': '推定所要時間:',
        'info-progress': '進捗:',
        'location-title': 'ロボットの現在位置',
        'steps-title': 'タスクステップ',
        'steps-step': 'ステップ',
        'steps-status': 'ステータス',
        'steps-start': '開始時間',
        'steps-end': '終了時間',
        'steps-duration': '所要時間',
        'steps-details': '詳細',
        'footer': '© 2026 ロボット管理システム',
        'status-pending': '保留中',
        'status-assigned': '割り当て済み',
        'status-en-route': '途中',
        'status-executing': '実行中',
        'status-completed': '完了',
        'status-failed': '失敗',
        'status-cancelled': 'キャンセル',
        'priority-high': '高',
        'priority-normal': '通常',
        'priority-low': '低',
        'basic-info-title': '基本情報',
        'real-time-info-title': 'リアルタイム情報',
        'static-specs-title': '静的仕様',
        'statistics-title': '統計',
        'connection-mission': '接続とミッション',
        'location': '場所',
        'battery-power': 'バッテリーと電源',
        'movement-safety': '移動と安全',
        'connection-state': '接続状態:',
        'current-mission': '現在のタスク:',
        'current-location': '現在地:',
        'coordinates': '座標:',
        'state-of-charge': '充電状態:',
        'battery-status': '状態:',
        'time-remaining': '残り時間:',
        'temperature': '温度:',
        'current-speed': '現在の速度:',
        'direction': '方向:',
        'safety-status': '安全状態:',
        'e-stop': '緊急停止:',
        'physical-dimensions': '物理サイズ',
        'operational-capabilities': '動作能力',
        'interfaces-connectivity': 'インターフェースと接続',
        'length-width-height': '縦x横x高さ:',
        'turn-radius': '旋回半径:',
        'max-speed-laden': '最大速度(積載時):',
        'max-speed-unladen': '最大速度(無負荷):',
        'max-payload': '最大積載量:',
        'lift-height': 'リフト高さ:',
        'communication-protocol': '通信プロトコル:',
        'io-ports': 'I/Oポート:',
        'odometry-data': 'オドメトリデータ',
        'performance-metrics': 'パフォーマンス指標',
        'total-distance': '総走行距離:',
        'total-operating-time': '総稼働時間:',
        'average-speed': '平均速度:',
        'mission-success-rate': 'ミッション成功率:',
        'average-mission-time': '平均ミッション時間:',
        'maintenance-intervals': 'メンテナンス間隔:'
    }
};

// Initialize the application
function init() {
    setupEventListeners();
    setupLanguageSwitcher();
    // Set default language
    setLanguage('zh');
}

// Set up event listeners
function setupEventListeners() {
    // View Details buttons
    viewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent row click event
            const taskRow = btn.closest('.task-row');
            const taskId = taskRow.dataset.taskId;
            showTaskDetails(taskId);
        });
    });
    
    // Task rows (click anywhere on row to view details)
    taskRows.forEach(row => {
        row.addEventListener('click', () => {
            const taskId = row.dataset.taskId;
            showTaskDetails(taskId);
        });
    });
    
    // Delete buttons
    const deleteBtns = document.querySelectorAll('.btn-delete');
    deleteBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent row click event
            
            // Determine if it's a list page delete or details page delete
            const taskRow = btn.closest('.task-row');
            let taskId;
            
            if (taskRow) {
                // List page delete
                taskId = taskRow.dataset.taskId;
                if (confirm('Are you sure you want to delete this task?')) {
                    // In a real application, we would send a request to delete the task
                    // For this prototype, we'll just remove the row from the table
                    taskRow.remove();
                    alert(`Task ${taskId} has been deleted`);
                }
            } else if (btn.id === 'detailDeleteBtn') {
                // Details page delete
                // In a real application, we would get the task ID from the current task
                // For this prototype, we'll just simulate it
                taskId = '12345';
                if (confirm('Are you sure you want to delete this task?')) {
                    // In a real application, we would send a request to delete the task
                    // For this prototype, we'll just show an alert and go back to the list
                    alert(`Task ${taskId} has been deleted`);
                    showTaskList();
                }
            }
        });
    });
    
    // Back to Task List button
    backToListBtn.addEventListener('click', showTaskList);
    
    // Back to Device List button
    if (backToDeviceListBtn) {
        backToDeviceListBtn.addEventListener('click', showDeviceList);
    }
    
    // Add New Task button
    const addTaskBtn = document.querySelector('#task-list-page .btn-primary');
    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', () => {
            alert('Add New Task functionality would be implemented here');
        });
    }
    
    // Add New Device button
    const addDeviceBtn = document.querySelector('#device-list-page .btn-primary');
    const addDeviceModal = document.getElementById('add-device-modal');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const btnVerifyPassword = document.getElementById('btn-verify-password');
    const btnAddDeviceConfirm = document.getElementById('btn-add-device-confirm');
    const connectionPasswordInput = document.getElementById('connection-password');
    const deviceIdInput = document.getElementById('new-device-id');
    const deviceNameInput = document.getElementById('new-device-name');
    const closeModalBtns = document.querySelectorAll('.close-modal, .close-modal-btn');
    const CORRECT_PASSWORD = 'admin123';
    
    if (addDeviceBtn) {
        addDeviceBtn.addEventListener('click', () => {
            step1.style.display = 'block';
            step2.style.display = 'none';
            btnVerifyPassword.style.display = 'inline-block';
            btnAddDeviceConfirm.style.display = 'none';
            connectionPasswordInput.value = '';
            deviceIdInput.value = '';
            deviceNameInput.value = '';
            addDeviceModal.classList.add('show');
        });
    }
    
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            addDeviceModal.classList.remove('show');
        });
    });
    
    addDeviceModal.addEventListener('click', (e) => {
        if (e.target === addDeviceModal) {
            addDeviceModal.classList.remove('show');
        }
    });
    
    btnVerifyPassword.addEventListener('click', () => {
        const password = connectionPasswordInput.value;
        if (password === CORRECT_PASSWORD) {
            step1.style.display = 'none';
            step2.style.display = 'block';
            btnVerifyPassword.style.display = 'none';
            btnAddDeviceConfirm.style.display = 'inline-block';
        } else {
            alert('连接口令错误，请重试！');
            connectionPasswordInput.value = '';
        }
    });
    
    btnAddDeviceConfirm.addEventListener('click', () => {
        const deviceId = deviceIdInput.value.trim();
        const deviceName = deviceNameInput.value.trim();
        
        if (!deviceId || !deviceName) {
            alert('请输入设备ID和设备名称！');
            return;
        }
        
        const deviceListTable = document.querySelector('#device-list-page tbody');
        if (deviceListTable) {
            const newRow = document.createElement('tr');
            newRow.setAttribute('data-device-id', deviceId);
            newRow.innerHTML = `
                <td>${deviceId}</td>
                <td>${deviceName}</td>
                <td><span class="status-badge online">Online</span></td>
                <td>0%</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>
                    <button class="btn-icon btn-view-details" title="View Details">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    </button>
                </td>
            `;
            deviceListTable.appendChild(newRow);
            
            const viewDetailsBtn = newRow.querySelector('.btn-view-details');
            viewDetailsBtn.addEventListener('click', () => {
                showDeviceDetails(deviceId);
            });
        }
        
        addDeviceModal.classList.remove('show');
        alert('设备添加成功！');
    });
    
    // Refresh buttons
    const refreshBtns = document.querySelectorAll('.btn-secondary');
    refreshBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Refresh functionality would be implemented here');
        });
    });
    
    // Search functionality
    const searchInputs = document.querySelectorAll('.search input');
    searchInputs.forEach(input => {
        input.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                alert('Search functionality would be implemented here');
            }
        });
    });
    
    // Search buttons
    const searchBtns = document.querySelectorAll('.btn-search');
    searchBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Search functionality would be implemented here');
        });
    });
    
    // Filter dropdowns
    const filters = document.querySelectorAll('.filter select');
    filters.forEach(filter => {
        filter.addEventListener('change', () => {
            alert('Filter functionality would be implemented here');
        });
    });
    
    // Pagination buttons
    const pageButtons = document.querySelectorAll('.btn-page');
    pageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!btn.textContent.includes('Previous') && !btn.textContent.includes('Next')) {
                // Remove active class from all page buttons
                pageButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                alert('Pagination functionality would be implemented here');
            } else {
                alert('Pagination functionality would be implemented here');
            }
        });
    });
    
    // Device row clicks
    deviceRows.forEach(row => {
        row.addEventListener('click', () => {
            const deviceId = row.dataset.deviceId;
            showDeviceDetails(deviceId);
        });
    });
    
    // Device View Details buttons
    const deviceViewDetailsBtns = document.querySelectorAll('#device-list-page .btn-view-details');
    deviceViewDetailsBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const deviceRow = btn.closest('.device-row');
            const deviceId = deviceRow.dataset.deviceId;
            showDeviceDetails(deviceId);
        });
    });
    
    // Devices navigation
    devicesNav.addEventListener('click', (e) => {
        e.preventDefault();
        showDeviceList();
        
        // Update active navigation
        tasksNav.classList.remove('active');
        devicesNav.classList.add('active');
    });
    
    // Tasks navigation
    tasksNav.addEventListener('click', (e) => {
        e.preventDefault();
        showTaskList();
        
        // Update active navigation
        devicesNav.classList.remove('active');
        tasksNav.classList.add('active');
    });
}

// Show Task Details page
function showTaskDetails(taskId) {
    // Hide task list page, show task details page
    taskListPage.classList.remove('active');
    taskDetailsPage.classList.add('active');
    
    // In a real application, we would fetch task details based on taskId
    // For this prototype, we'll just show the pre-populated details
    console.log(`Showing details for task ${taskId}`);
    
    // Example: Update task details based on selected task
    // This would be implemented in a real application
    if (taskId === '2') {
        // Update task info for Task #12346
        document.querySelector('.task-info .info-grid').innerHTML = `
            <div class="info-item">
                <label>Task ID:</label>
                <span>Task #12346</span>
            </div>
            <div class="info-item">
                <label>Task Type:</label>
                <span>Cleaning</span>
            </div>
            <div class="info-item">
                <label>Task Name:</label>
                <span>Room Cleaning - Conference Hall</span>
            </div>
            <div class="info-item">
                <label>Status:</label>
                <span class="status-badge executing">Executing</span>
            </div>
            <div class="info-item">
                <label>Priority:</label>
                <span class="priority-badge high">High</span>
            </div>
            <div class="info-item">
                <label>Robot:</label>
                <span>Robot #3</span>
            </div>
            <div class="info-item">
                <label>Current Location:</label>
                <span>Conference Hall, 1st Floor</span>
            </div>
            <div class="info-item">
                <label>ETA:</label>
                <span>14:50:15</span>
            </div>
            <div class="info-item">
                <label>Start Time:</label>
                <span>14:35:00</span>
            </div>
            <div class="info-item">
                <label>Estimated Duration:</label>
                <span>15 min 15 sec</span>
            </div>
            <div class="info-item">
                <label>Progress:</label>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: 45%;"></div>
                </div>
                <span>45%</span>
            </div>
        `;
        
        // Re-add the delete button
        document.querySelector('.task-info').innerHTML += `
            <!-- Actions -->
            <div class="task-actions">
                <button class="btn btn-delete" id="detailDeleteBtn">Delete</button>
            </div>
        `;
        
        // Re-attach event listener for the delete button
        document.getElementById('detailDeleteBtn').addEventListener('click', (e) => {
            e.stopPropagation();
            const taskId = '12346';
            if (confirm('Are you sure you want to delete this task?')) {
                alert(`Task ${taskId} has been deleted`);
                showTaskList();
            }
        });
        
        // Update language for the new elements
        const currentLang = 'en'; // In a real app, we would track the current language
        const infoLabels = document.querySelectorAll('.info-item label');
        infoLabels[1].textContent = translations[currentLang]['info-task-type'];
        document.getElementById('detailDeleteBtn').textContent = translations[currentLang]['btn-delete'];
        
        // Update robot location map
        document.querySelector('.building-layout').innerHTML = `
            <div class="floor floor-1">
                <span class="floor-label">1st Floor</span>
                <div class="room">Lobby</div>
                <div class="room active">Conference Hall</div>
            </div>
            <div class="floor floor-2">
                <span class="floor-label">2nd Floor</span>
                <div class="room">Offices</div>
                <div class="elevator">Elevator</div>
            </div>
            <div class="floor floor-3">
                <span class="floor-label">3rd Floor</span>
                <div class="room">Executive Suite</div>
                <div class="room">Meeting Rooms</div>
            </div>
            <div class="robot-marker" style="top: 85%; left: 60%;">🤖</div>
        `;
        
        // Update location details
        document.querySelector('.location-details p').textContent = 'Robot #3 is currently cleaning the Conference Hall on the 1st floor.';
        
        // Update task steps
        document.querySelector('.steps-table tbody').innerHTML = `
            <tr>
                <td>1. Leave Charging Station</td>
                <td>
                    <span class="status-badge completed">Completed</span>
                </td>
                <td>14:35:00</td>
                <td>14:35:20</td>
                <td>20s</td>
                <td>Robot left charging station successfully</td>
            </tr>
            <tr>
                <td>2. Navigate to Conference Hall</td>
                <td>
                    <span class="status-badge completed">Completed</span>
                </td>
                <td>14:35:20</td>
                <td>14:35:45</td>
                <td>25s</td>
                <td>Robot navigated to Conference Hall</td>
            </tr>
            <tr>
                <td>3. Start Cleaning</td>
                <td>
                    <span class="status-badge executing">Executing</span>
                </td>
                <td>14:35:45</td>
                <td>-</td>
                <td>4 min 30s</td>
                <td>Robot is currently cleaning the Conference Hall</td>
            </tr>
            <tr>
                <td>4. Verify Cleaning Completion</td>
                <td>
                    <span class="status-badge pending">Pending</span>
                </td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Robot will verify cleaning completion</td>
            </tr>
            <tr>
                <td>5. Return to Charging Station</td>
                <td>
                    <span class="status-badge pending">Pending</span>
                </td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>Robot will return to charging station</td>
            </tr>
        `;
    }
}

// Show Task List page
function showTaskList() {
    // Hide all pages except task list
    taskDetailsPage.classList.remove('active');
    deviceListPage.classList.remove('active');
    deviceDetailsPage.classList.remove('active');
    taskListPage.classList.add('active');
}

// Show Device List page
function showDeviceList() {
    // Hide all pages except device list
    taskListPage.classList.remove('active');
    taskDetailsPage.classList.remove('active');
    deviceDetailsPage.classList.remove('active');
    deviceListPage.classList.add('active');
}

// Show Device Details page
function showDeviceDetails(deviceId) {
    // Hide device list page, show device details page
    deviceListPage.classList.remove('active');
    deviceDetailsPage.classList.add('active');
    
    // In a real application, we would fetch device details based on deviceId
    // For this prototype, we'll just show the pre-populated details
    console.log(`Showing details for device ${deviceId}`);
    
    // Device data
    const devices = {
        '1': {
            id: 'TZ123_001',
            name: '天体0号',
            type: 'Robot',
            model: 'TZC123',
            brand: 'Tianti',
            status: 'online',
            battery: 85,
            location: '2nd Floor, Office Area',
            ip: '192.168.1.101',
            mac: '00:1B:44:11:3A:B7',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=autonomous%20mobile%20robot%20for%20indoor%20delivery%20in%20office%20environment%2C%20modern%20design%2C%20white%20and%20blue%20color%2C%20professional%20photography&image_size=portrait_4_3',
            realTime: {
                connection: 'Online',
                mission: 'Moving to Dock 5',
                coordinates: 'X: 12.5, Y: 8.3, Floor: 2',
                batteryStatus: 'Discharging',
                timeRemaining: '2h 30m',
                temperature: '25°C',
                speed: '0.8 m/s',
                direction: 'North',
                safetyStatus: 'Normal',
                eStop: 'Not Active'
            },
            specs: {
                dimensions: '500mm x 400mm x 350mm',
                turnRadius: 'Zero (Differential Drive)',
                maxSpeedLaden: '1.2 m/s',
                maxSpeedUnladen: '1.5 m/s',
                maxPayload: '50 kg',
                liftHeight: 'Not applicable',
                communication: 'WiFi 5GHz, Ethernet',
                ioPorts: '2x USB, 1x RS-485'
            },
            stats: {
                distance: '1,245 meters',
                operatingTime: '48 hours',
                averageSpeed: '0.6 m/s',
                successRate: '98.5%',
                averageMissionTime: '8.5 minutes',
                maintenanceInterval: 'Every 500 hours'
            }
        },
        '2': {
            id: 'TZ122_002',
            name: '天体1号',
            type: 'Robot',
            model: 'TZC122',
            brand: 'Tianti',
            status: 'online',
            battery: 92,
            location: '3rd Floor, Conference Area',
            ip: '192.168.1.102',
            mac: '00:1B:44:11:3A:B8',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=autonomous%20cleaning%20robot%20in%20office%20building%2C%20modern%20design%2C%20white%20and%20green%20color%2C%20professional%20photography&image_size=portrait_4_3',
            realTime: {
                connection: 'Online',
                mission: 'Cleaning Conference Hall',
                coordinates: 'X: 8.2, Y: 15.7, Floor: 3',
                batteryStatus: 'Discharging',
                timeRemaining: '3h 15m',
                temperature: '23°C',
                speed: '0.3 m/s',
                direction: 'East',
                safetyStatus: 'Normal',
                eStop: 'Not Active'
            },
            specs: {
                dimensions: '450mm x 380mm x 320mm',
                turnRadius: 'Zero (Differential Drive)',
                maxSpeedLaden: '1.0 m/s',
                maxSpeedUnladen: '1.3 m/s',
                maxPayload: '30 kg',
                liftHeight: 'Not applicable',
                communication: 'WiFi 5GHz',
                ioPorts: '1x USB, 1x RS-485'
            },
            stats: {
                distance: '980 meters',
                operatingTime: '36 hours',
                averageSpeed: '0.4 m/s',
                successRate: '99.2%',
                averageMissionTime: '12.3 minutes',
                maintenanceInterval: 'Every 600 hours'
            }
        },
        '3': {
            id: 'XG-001',
            name: 'XG-R1',
            type: 'Robot',
            model: 'XG-R1',
            brand: '仙工',
            status: 'online',
            battery: 78,
            location: '1st Floor, Warehouse',
            ip: '192.168.1.103',
            mac: '00:1B:44:11:3A:B9',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=warehouse%20autonomous%20mobile%20robot%2C%20industrial%20design%2C%20yellow%20and%20black%20color%2C%20professional%20photography&image_size=portrait_4_3',
            realTime: {
                connection: 'Online',
                mission: 'Warehouse Transfer',
                coordinates: 'X: 22.1, Y: 35.4, Floor: 1',
                batteryStatus: 'Discharging',
                timeRemaining: '1h 45m',
                temperature: '26°C',
                speed: '1.0 m/s',
                direction: 'South',
                safetyStatus: 'Normal',
                eStop: 'Not Active'
            },
            specs: {
                dimensions: '600mm x 500mm x 400mm',
                turnRadius: 'Zero (Differential Drive)',
                maxSpeedLaden: '1.5 m/s',
                maxSpeedUnladen: '2.0 m/s',
                maxPayload: '100 kg',
                liftHeight: 'Not applicable',
                communication: 'WiFi 5GHz, 5G',
                ioPorts: '2x USB, 2x RS-485'
            },
            stats: {
                distance: '2,150 meters',
                operatingTime: '62 hours',
                averageSpeed: '0.8 m/s',
                successRate: '97.8%',
                averageMissionTime: '6.2 minutes',
                maintenanceInterval: 'Every 400 hours'
            }
        },
        '4': {
            id: 'MIR-001',
            name: 'MiR200',
            type: 'Robot',
            model: 'MiR200',
            brand: 'MiR',
            status: 'offline',
            battery: 0,
            location: 'Basement, Maintenance Area',
            ip: '192.168.1.104',
            mac: '00:1B:44:11:3A:BA',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=MiR200%20autonomous%20mobile%20robot%2C%20industrial%20design%2C%20white%20and%20orange%20color%2C%20professional%20photography&image_size=portrait_4_3',
            realTime: {
                connection: 'Offline',
                mission: 'N/A',
                coordinates: 'X: 5.3, Y: 8.7, Floor: B1',
                batteryStatus: 'Idle',
                timeRemaining: '0h 0m',
                temperature: '22°C',
                speed: '0 m/s',
                direction: 'N/A',
                safetyStatus: 'Normal',
                eStop: 'Not Active'
            },
            specs: {
                dimensions: '580mm x 480mm x 320mm',
                turnRadius: 'Zero (Differential Drive)',
                maxSpeedLaden: '1.2 m/s',
                maxSpeedUnladen: '1.8 m/s',
                maxPayload: '200 kg',
                liftHeight: 'Not applicable',
                communication: 'WiFi 5GHz, Ethernet',
                ioPorts: '2x USB, 1x RS-485, 1x Ethernet'
            },
            stats: {
                distance: '3,420 meters',
                operatingTime: '120 hours',
                averageSpeed: '0.7 m/s',
                successRate: '96.5%',
                averageMissionTime: '5.8 minutes',
                maintenanceInterval: 'Every 500 hours'
            }
        },
        '5': {
            id: 'ELV-001',
            name: 'Elevator-1',
            type: 'Elevator',
            model: 'Gen2',
            brand: 'Otis',
            status: 'online',
            battery: null,
            location: 'Main Lobby',
            ip: '192.168.1.105',
            mac: '00:1B:44:11:3A:BB',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20elevator%20in%20office%20building%2C%20professional%20photography&image_size=portrait_4_3',
            realTime: {
                connection: 'Online',
                mission: 'Idle',
                coordinates: 'X: 10.0, Y: 10.0, Floor: 1',
                batteryStatus: 'N/A',
                timeRemaining: 'N/A',
                temperature: '24°C',
                speed: '0 m/s',
                direction: 'N/A',
                safetyStatus: 'Normal',
                eStop: 'Not Active'
            },
            specs: {
                dimensions: '2000mm x 1500mm x 3000mm',
                turnRadius: 'N/A',
                maxSpeedLaden: '1.5 m/s',
                maxSpeedUnladen: '1.5 m/s',
                maxPayload: '1000 kg',
                liftHeight: '30 meters',
                communication: 'Ethernet, RS-485',
                ioPorts: '4x RS-485, 2x Ethernet'
            },
            stats: {
                distance: 'N/A',
                operatingTime: '720 hours',
                averageSpeed: '0.5 m/s',
                successRate: '99.9%',
                averageMissionTime: '15 seconds',
                maintenanceInterval: 'Every 1000 hours'
            }
        },
        '6': {
            id: 'DR-001',
            name: 'Main Entrance',
            type: 'Door',
            model: 'AS2000',
            brand: 'Assa Abloy',
            status: 'online',
            battery: null,
            location: 'Ground Floor',
            ip: '192.168.1.106',
            mac: '00:1B:44:11:3A:BC',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20automatic%20door%20in%20office%20building%2C%20professional%20photography&image_size=portrait_4_3',
            realTime: {
                connection: 'Online',
                mission: 'Idle',
                coordinates: 'X: 0.0, Y: 0.0, Floor: G',
                batteryStatus: 'N/A',
                timeRemaining: 'N/A',
                temperature: '23°C',
                speed: '0 m/s',
                direction: 'N/A',
                safetyStatus: 'Normal',
                eStop: 'Not Active'
            },
            specs: {
                dimensions: '3000mm x 200mm x 2200mm',
                turnRadius: 'N/A',
                maxSpeedLaden: '0.5 m/s',
                maxSpeedUnladen: '0.5 m/s',
                maxPayload: 'N/A',
                liftHeight: 'N/A',
                communication: 'WiFi, Ethernet',
                ioPorts: '2x RS-485, 1x Ethernet'
            },
            stats: {
                distance: 'N/A',
                operatingTime: '500 hours',
                averageSpeed: '0.2 m/s',
                successRate: '99.5%',
                averageMissionTime: '3 seconds',
                maintenanceInterval: 'Every 600 hours'
            }
        }
    };
    
    // Get device data
    const device = devices[deviceId] || devices['1'];
    console.log('Device data:', device);
    
    // Update basic info section
    const deviceImage = document.getElementById('device-image');
    if (deviceImage) {
        deviceImage.src = device.image;
        deviceImage.alt = device.name;
    }
    
    const basicInfoGrid = document.querySelector('.basic-info-content .info-grid');
    if (basicInfoGrid) {
        basicInfoGrid.innerHTML = `
            <div class="info-item">
                <label>Device ID:</label>
                <span>${device.id}</span>
            </div>
            <div class="info-item">
                <label>Device Name:</label>
                <span>${device.name}</span>
            </div>
            <div class="info-item">
                <label>Type:</label>
                <span>${device.type}</span>
            </div>
            <div class="info-item">
                <label>Model:</label>
                <span>${device.model}</span>
            </div>
            <div class="info-item">
                <label>Brand:</label>
                <span>${device.brand}</span>
            </div>
            <div class="info-item">
                <label>Status:</label>
                <span class="status-badge ${device.status}">${device.status.charAt(0).toUpperCase() + device.status.slice(1)}</span>
            </div>
            <div class="info-item">
                <label>Battery Level:</label>
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${device.battery || 0}%;"></div>
                </div>
                <span>${device.battery || 'N/A'}%</span>
            </div>
            <div class="info-item">
                <label>Location:</label>
                <span>${device.location}</span>
            </div>
        `;
    }
    
    // Update real-time info section
    const infoCard = document.querySelector('.real-time-info .info-card');
    console.log('Info card element:', infoCard);
    if (infoCard) {
        infoCard.innerHTML = `
            <div class="info-row">
                <div class="info-section">
                    <h4>Connection & Mission</h4>
                    <div class="info-item">
                        <label>Connection State:</label>
                        <span class="status-value ${device.realTime.connection === 'Online' ? 'connected' : ''}">${device.realTime.connection}</span>
                    </div>
                    <div class="info-item">
                        <label>Current Mission:</label>
                        <span>${device.realTime.mission}</span>
                    </div>
                </div>
                <div class="info-section">
                    <h4>Location</h4>
                    <div class="info-item">
                        <label>Current Location:</label>
                        <span>${device.location}</span>
                    </div>
                    <div class="info-item">
                        <label>Coordinates:</label>
                        <span>${device.realTime.coordinates}</span>
                    </div>
                </div>
            </div>
            <div class="info-row">
                <div class="info-section">
                    <h4>Battery & Power</h4>
                    <div class="info-item">
                        <label>State of Charge:</label>
                        <span>${device.battery || 'N/A'}%</span>
                    </div>
                    <div class="info-item">
                        <label>Status:</label>
                        <span>${device.realTime.batteryStatus}</span>
                    </div>
                    <div class="info-item">
                        <label>Time Remaining:</label>
                        <span>${device.realTime.timeRemaining}</span>
                    </div>
                    <div class="info-item">
                        <label>Temperature:</label>
                        <span>${device.realTime.temperature}</span>
                    </div>
                </div>
                <div class="info-section">
                    <h4>Movement & Safety</h4>
                    <div class="info-item">
                        <label>Current Speed:</label>
                        <span>${device.realTime.speed}</span>
                    </div>
                    <div class="info-item">
                        <label>Direction:</label>
                        <span>${device.realTime.direction}</span>
                    </div>
                    <div class="info-item">
                        <label>Safety Status:</label>
                        <span class="status-value ${device.realTime.safetyStatus === 'Normal' ? 'connected' : ''}">${device.realTime.safetyStatus}</span>
                    </div>
                    <div class="info-item">
                        <label>E-Stop:</label>
                        <span>${device.realTime.eStop}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    // Update static specifications section
    const specsGrid = document.querySelector('.static-specs .specs-grid');
    if (specsGrid) {
        specsGrid.innerHTML = `
            <div class="specs-section">
                <h4>Physical Dimensions</h4>
                <div class="info-item">
                    <label>Length x Width x Height:</label>
                    <span>${device.specs.dimensions}</span>
                </div>
                <div class="info-item">
                    <label>Turn Radius:</label>
                    <span>${device.specs.turnRadius}</span>
                </div>
            </div>
            <div class="specs-section">
                <h4>Operational Capabilities</h4>
                <div class="info-item">
                    <label>Max Speed (Laden):</label>
                    <span>${device.specs.maxSpeedLaden}</span>
                </div>
                <div class="info-item">
                    <label>Max Speed (Unladen):</label>
                    <span>${device.specs.maxSpeedUnladen}</span>
                </div>
                <div class="info-item">
                    <label>Max Payload:</label>
                    <span>${device.specs.maxPayload}</span>
                </div>
                <div class="info-item">
                    <label>Lift Height:</label>
                    <span>${device.specs.liftHeight}</span>
                </div>
            </div>
            <div class="specs-section">
                <h4>Interfaces & Connectivity</h4>
                <div class="info-item">
                    <label>Communication Protocol:</label>
                    <span>${device.specs.communication}</span>
                </div>
                <div class="info-item">
                    <label>I/O Ports:</label>
                    <span>${device.specs.ioPorts}</span>
                </div>
                <div class="info-item">
                    <label>IP Address:</label>
                    <span>${device.ip}</span>
                </div>
                <div class="info-item">
                    <label>MAC Address:</label>
                    <span>${device.mac}</span>
                </div>
            </div>
        `;
    }
    
    // Update statistics section
    const statsGrid = document.querySelector('.device-statistics .stats-grid');
    if (statsGrid) {
        statsGrid.innerHTML = `
            <div class="stats-section">
                <h4>Odometry Data</h4>
                <div class="info-item">
                    <label>Total Distance Traveled:</label>
                    <span>${device.stats.distance}</span>
                </div>
                <div class="info-item">
                    <label>Total Operating Time:</label>
                    <span>${device.stats.operatingTime}</span>
                </div>
                <div class="info-item">
                    <label>Average Speed:</label>
                    <span>${device.stats.averageSpeed}</span>
                </div>
            </div>
            <div class="stats-section">
                <h4>Performance Metrics</h4>
                <div class="info-item">
                    <label>Mission Success Rate:</label>
                    <span>${device.stats.successRate}</span>
                </div>
                <div class="info-item">
                    <label>Average Mission Time:</label>
                    <span>${device.stats.averageMissionTime}</span>
                </div>
                <div class="info-item">
                    <label>Maintenance Intervals:</label>
                    <span>${device.stats.maintenanceInterval}</span>
                </div>
            </div>
        `;
    }
    
    // Update recent activity
    const activityTable = document.querySelector('#device-details-page .steps-table tbody');
    if (activityTable) {
        activityTable.innerHTML = `
            <tr>
                <td>2026-02-24 14:30:00</td>
                <td>Status Change</td>
                <td>Changed from 'Maintenance' to '${device.status.charAt(0).toUpperCase() + device.status.slice(1)}'</td>
            </tr>
            <tr>
                <td>2026-02-24 14:25:00</td>
                <td>Maintenance</td>
                <td>Firmware updated to v1.2.3</td>
            </tr>
            <tr>
                <td>2026-02-24 10:15:00</td>
                <td>Task Completed</td>
                <td>Completed task #12345</td>
            </tr>
            <tr>
                <td>2026-02-24 08:00:00</td>
                <td>System Boot</td>
                <td>System started successfully</td>
            </tr>
        `;
    }
    
    // Update language for the new elements
    const currentLang = 'zh'; // In a real app, we would track the current language
    setLanguage(currentLang);
}

// Simulate real-time updates (for demo purposes)
function simulateRealTimeUpdates() {
    // This function would be implemented in a real application
    // to update task statuses, locations, and other data in real-time
    console.log('Real-time updates would be simulated here');
}

// Set up language switcher
function setupLanguageSwitcher() {
    // Toggle dropdown
    languageBtn.addEventListener('click', () => {
        languageDropdown.classList.toggle('show');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('show');
        }
    });
    
    // Language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.dataset.lang;
            setLanguage(lang);
            languageDropdown.classList.remove('show');
        });
    });
}

// Set language
function setLanguage(lang) {
    // Update sidebar title
    document.querySelector('.sidebar-header h1').textContent = translations[lang]['sidebar-title'];
    
    // Update navigation links
    const navLinks = document.querySelectorAll('.nav ul li a');
    navLinks[0].textContent = translations[lang]['nav-tasks'];
    navLinks[1].textContent = translations[lang]['nav-devices'];
    navLinks[2].textContent = translations[lang]['nav-dashboard'];
    navLinks[3].textContent = translations[lang]['nav-reports'];
    
    // Update task list page
    const taskListActionButtons = document.querySelectorAll('#task-list-page .action-buttons button');
    if (taskListActionButtons.length > 0) {
        document.querySelector('#task-list-page h2').textContent = translations[lang]['task-list-title'];
        taskListActionButtons[0].textContent = translations[lang]['btn-add-task'];
        taskListActionButtons[1].textContent = translations[lang]['btn-refresh'];
        const taskSearchInput = document.querySelector('#task-list-page .search input');
        if (taskSearchInput) {
            taskSearchInput.placeholder = translations[lang]['search-placeholder'];
        }
    }
    
    // Update device list page
    const deviceListActionButtons = document.querySelectorAll('#device-list-page .action-buttons button');
    if (deviceListActionButtons.length > 0) {
        document.querySelector('#device-list-page h2').textContent = translations[lang]['device-list-title'];
        deviceListActionButtons[0].textContent = translations[lang]['btn-add-device'];
        deviceListActionButtons[1].textContent = translations[lang]['btn-refresh'];
        const deviceSearchInput = document.querySelector('#device-list-page .search input');
        if (deviceSearchInput) {
            deviceSearchInput.placeholder = translations[lang]['search-devices-placeholder'];
        }
    }
    
    // Update task table headers
    const taskTableHeaders = document.querySelectorAll('#task-list-page .task-table th');
    if (taskTableHeaders.length > 0) {
        taskTableHeaders[0].textContent = translations[lang]['table-task-id'];
        taskTableHeaders[1].textContent = translations[lang]['table-task-type'];
        taskTableHeaders[2].textContent = translations[lang]['table-task-name'];
        taskTableHeaders[3].textContent = translations[lang]['table-status'];
        taskTableHeaders[4].textContent = translations[lang]['table-robot'];
        taskTableHeaders[5].textContent = translations[lang]['table-location'];
        taskTableHeaders[6].textContent = translations[lang]['table-eta'];
        taskTableHeaders[7].textContent = translations[lang]['table-priority'];
        taskTableHeaders[8].textContent = translations[lang]['table-actions'];
    }
    
    // Update device table headers
    const deviceTableHeaders = document.querySelectorAll('#device-list-page .task-table th');
    if (deviceTableHeaders.length > 0) {
        deviceTableHeaders[0].textContent = translations[lang]['table-device-id'];
        deviceTableHeaders[1].textContent = translations[lang]['table-device-name'];
        deviceTableHeaders[2].textContent = translations[lang]['table-type'];
        deviceTableHeaders[3].textContent = translations[lang]['table-model'];
        deviceTableHeaders[4].textContent = translations[lang]['table-brand'];
        deviceTableHeaders[5].textContent = translations[lang]['table-status'];
        deviceTableHeaders[6].textContent = translations[lang]['table-battery'];
        deviceTableHeaders[7].textContent = translations[lang]['table-current-task'];
        deviceTableHeaders[8].textContent = translations[lang]['table-location'];
        deviceTableHeaders[9].textContent = translations[lang]['table-actions'];
    }
    
    // Update view details buttons
    document.querySelectorAll('.btn-view-details').forEach(btn => {
        btn.textContent = translations[lang]['btn-view-details'];
    });
    
    // Update delete buttons
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.textContent = translations[lang]['btn-delete'];
    });
    
    // Update task details page
    const taskDetailsH2 = document.querySelector('#task-details-page h2');
    if (taskDetailsH2) {
        taskDetailsH2.textContent = translations[lang]['task-details-title'];
        backToListBtn.textContent = translations[lang]['btn-back'];
        
        // Update info grid labels
        const taskInfoLabels = document.querySelectorAll('#task-details-page .info-item label');
        if (taskInfoLabels.length > 0) {
            taskInfoLabels[0].textContent = translations[lang]['info-task-id'];
            taskInfoLabels[1].textContent = translations[lang]['info-task-type'];
            taskInfoLabels[2].textContent = translations[lang]['info-task-name'];
            taskInfoLabels[3].textContent = translations[lang]['info-status'];
            taskInfoLabels[4].textContent = translations[lang]['info-priority'];
            taskInfoLabels[5].textContent = translations[lang]['info-robot'];
            taskInfoLabels[6].textContent = translations[lang]['info-location'];
            taskInfoLabels[7].textContent = translations[lang]['info-eta'];
            taskInfoLabels[8].textContent = translations[lang]['info-start-time'];
            taskInfoLabels[9].textContent = translations[lang]['info-duration'];
            taskInfoLabels[10].textContent = translations[lang]['info-progress'];
        }
        
        // Update delete button on task details page
        const detailDeleteBtn = document.getElementById('detailDeleteBtn');
        if (detailDeleteBtn) {
            detailDeleteBtn.textContent = translations[lang]['btn-delete'];
        }
        
        // Update location and steps titles
        const taskLocationH3 = document.querySelectorAll('#task-details-page .robot-location h3')[0];
        if (taskLocationH3) {
            taskLocationH3.textContent = translations[lang]['location-title'];
        }
        const taskStepsH3 = document.querySelectorAll('#task-details-page .task-steps h3')[0];
        if (taskStepsH3) {
            taskStepsH3.textContent = translations[lang]['steps-title'];
        }
        
        // Update steps table headers
        const stepsHeaders = document.querySelectorAll('#task-details-page .steps-table th');
        if (stepsHeaders.length > 0) {
            stepsHeaders[0].textContent = translations[lang]['steps-step'];
            stepsHeaders[1].textContent = translations[lang]['steps-status'];
            stepsHeaders[2].textContent = translations[lang]['steps-start'];
            stepsHeaders[3].textContent = translations[lang]['steps-end'];
            stepsHeaders[4].textContent = translations[lang]['steps-duration'];
            stepsHeaders[5].textContent = translations[lang]['steps-details'];
        }
    }
    
    // Update device details page
    const deviceDetailsH2 = document.querySelector('#device-details-page h2');
    if (deviceDetailsH2) {
        deviceDetailsH2.textContent = translations[lang]['device-details-title'];
        backToDeviceListBtn.textContent = translations[lang]['btn-back-device-list'];
        
        // Update info grid labels
        const deviceInfoLabels = document.querySelectorAll('#device-details-page .info-item label');
        if (deviceInfoLabels.length > 0) {
            deviceInfoLabels[0].textContent = translations[lang]['info-device-id'];
            deviceInfoLabels[1].textContent = translations[lang]['info-device-name'];
            deviceInfoLabels[2].textContent = translations[lang]['info-type'];
            deviceInfoLabels[3].textContent = translations[lang]['info-model'];
            deviceInfoLabels[4].textContent = translations[lang]['info-brand'];
            deviceInfoLabels[5].textContent = translations[lang]['info-base-status'];
            deviceInfoLabels[6].textContent = translations[lang]['info-run-status'];
            deviceInfoLabels[7].textContent = translations[lang]['info-drive-type'];
            deviceInfoLabels[8].textContent = translations[lang]['info-current-task'];
            deviceInfoLabels[9].textContent = translations[lang]['info-location'];
            deviceInfoLabels[10].textContent = translations[lang]['info-map-code'];
            deviceInfoLabels[11].textContent = translations[lang]['info-localization'];
            deviceInfoLabels[12].textContent = translations[lang]['info-current-marker'];
            deviceInfoLabels[13].textContent = translations[lang]['info-ip'];
            deviceInfoLabels[14].textContent = translations[lang]['info-mac'];
            deviceInfoLabels[15].textContent = translations[lang]['info-firmware'];
            deviceInfoLabels[16].textContent = translations[lang]['info-battery'];
            deviceInfoLabels[17].textContent = translations[lang]['info-last-maintenance'];
            deviceInfoLabels[18].textContent = translations[lang]['info-next-maintenance'];
        }
        
        // Update device action buttons
        const deviceActionButtons = document.querySelectorAll('#device-details-page .task-actions button');
        if (deviceActionButtons.length > 0) {
            deviceActionButtons[0].textContent = translations[lang]['btn-edit-device'];
            deviceActionButtons[1].textContent = translations[lang]['btn-reboot'];
            deviceActionButtons[2].textContent = translations[lang]['btn-delete'];
        }
        
        // Update device status title
        const deviceStatusH3 = document.querySelectorAll('#device-details-page .robot-location h3')[0];
        if (deviceStatusH3) {
            deviceStatusH3.textContent = translations[lang]['device-status-title'];
        }
        
        // Update status grid labels
        const statusLabels = document.querySelectorAll('#device-details-page .status-label');
        if (statusLabels.length > 0) {
            statusLabels[0].textContent = translations[lang]['status-connection'];
            statusLabels[1].textContent = translations[lang]['status-cpu'];
            statusLabels[2].textContent = translations[lang]['status-memory'];
            statusLabels[3].textContent = translations[lang]['status-disk'];
        }
        
        // Update activity title
        const activityH3 = document.querySelectorAll('#device-details-page .task-steps h3')[0];
        if (activityH3) {
            activityH3.textContent = translations[lang]['activity-title'];
        }
        
        // Update activity table headers
        const activityHeaders = document.querySelectorAll('#device-details-page .steps-table th');
        if (activityHeaders.length > 0) {
            activityHeaders[0].textContent = translations[lang]['table-time'];
            activityHeaders[1].textContent = translations[lang]['table-activity'];
            activityHeaders[2].textContent = translations[lang]['table-details'];
        }
        
        // Update device details section titles
        const basicInfoTitle = document.querySelector('.device-basic-info .basic-info-content h3');
        if (basicInfoTitle) {
            basicInfoTitle.textContent = translations[lang]['basic-info-title'];
        }
        
        // Update basic info section labels
        const basicInfoLabels = document.querySelectorAll('.device-basic-info .info-item label');
        if (basicInfoLabels.length >= 8) {
            basicInfoLabels[0].textContent = translations[lang]['info-device-id'];
            basicInfoLabels[1].textContent = translations[lang]['info-device-name'];
            basicInfoLabels[2].textContent = translations[lang]['info-type'];
            basicInfoLabels[3].textContent = translations[lang]['info-model'];
            basicInfoLabels[4].textContent = translations[lang]['info-brand'];
            basicInfoLabels[5].textContent = translations[lang]['info-status'];
            basicInfoLabels[6].textContent = translations[lang]['info-battery'];
            basicInfoLabels[7].textContent = translations[lang]['info-location'];
        }
        
        const realTimeInfoTitle = document.querySelector('.real-time-info h3');
        if (realTimeInfoTitle) {
            realTimeInfoTitle.textContent = translations[lang]['real-time-info-title'];
        }
        
        const staticSpecsTitle = document.querySelector('.static-specs h3');
        if (staticSpecsTitle) {
            staticSpecsTitle.textContent = translations[lang]['static-specs-title'];
        }
        
        const statisticsTitle = document.querySelector('.device-statistics h3');
        if (statisticsTitle) {
            statisticsTitle.textContent = translations[lang]['statistics-title'];
        }
        
        // Update real-time info subsection titles and labels
        const infoSections = document.querySelectorAll('.real-time-info .info-section');
        if (infoSections.length >= 4) {
            if (infoSections[0].querySelector('h4')) {
                infoSections[0].querySelector('h4').textContent = translations[lang]['connection-mission'];
            }
            if (infoSections[1].querySelector('h4')) {
                infoSections[1].querySelector('h4').textContent = translations[lang]['location'];
            }
            if (infoSections[2].querySelector('h4')) {
                infoSections[2].querySelector('h4').textContent = translations[lang]['battery-power'];
            }
            if (infoSections[3].querySelector('h4')) {
                infoSections[3].querySelector('h4').textContent = translations[lang]['movement-safety'];
            }
        }
        
        // Update real-time info labels
        const realTimeLabels = document.querySelectorAll('.real-time-info .info-item label');
        if (realTimeLabels.length >= 12) {
            realTimeLabels[0].textContent = translations[lang]['connection-state'];
            realTimeLabels[1].textContent = translations[lang]['current-mission'];
            realTimeLabels[2].textContent = translations[lang]['current-location'];
            realTimeLabels[3].textContent = translations[lang]['coordinates'];
            realTimeLabels[4].textContent = translations[lang]['state-of-charge'];
            realTimeLabels[5].textContent = translations[lang]['battery-status'];
            realTimeLabels[6].textContent = translations[lang]['time-remaining'];
            realTimeLabels[7].textContent = translations[lang]['temperature'];
            realTimeLabels[8].textContent = translations[lang]['current-speed'];
            realTimeLabels[9].textContent = translations[lang]['direction'];
            realTimeLabels[10].textContent = translations[lang]['safety-status'];
            realTimeLabels[11].textContent = translations[lang]['e-stop'];
        }
        
        // Update static specs subsection titles
        const specsSections = document.querySelectorAll('.static-specs .specs-section');
        if (specsSections.length >= 3) {
            if (specsSections[0].querySelector('h4')) {
                specsSections[0].querySelector('h4').textContent = translations[lang]['physical-dimensions'];
            }
            if (specsSections[1].querySelector('h4')) {
                specsSections[1].querySelector('h4').textContent = translations[lang]['operational-capabilities'];
            }
            if (specsSections[2].querySelector('h4')) {
                specsSections[2].querySelector('h4').textContent = translations[lang]['interfaces-connectivity'];
            }
        }
        
        // Update static specs labels
        const specsLabels = document.querySelectorAll('.static-specs .info-item label');
        if (specsLabels.length >= 10) {
            specsLabels[0].textContent = translations[lang]['length-width-height'];
            specsLabels[1].textContent = translations[lang]['turn-radius'];
            specsLabels[2].textContent = translations[lang]['max-speed-laden'];
            specsLabels[3].textContent = translations[lang]['max-speed-unladen'];
            specsLabels[4].textContent = translations[lang]['max-payload'];
            specsLabels[5].textContent = translations[lang]['lift-height'];
            specsLabels[6].textContent = translations[lang]['communication-protocol'];
            specsLabels[7].textContent = translations[lang]['io-ports'];
            specsLabels[8].textContent = translations[lang]['info-ip'];
            specsLabels[9].textContent = translations[lang]['info-mac'];
        }
        
        // Update statistics subsection titles
        const statsSections = document.querySelectorAll('.device-statistics .stats-section');
        if (statsSections.length >= 2) {
            if (statsSections[0].querySelector('h4')) {
                statsSections[0].querySelector('h4').textContent = translations[lang]['odometry-data'];
            }
            if (statsSections[1].querySelector('h4')) {
                statsSections[1].querySelector('h4').textContent = translations[lang]['performance-metrics'];
            }
        }
        
        // Update statistics labels
        const statsLabels = document.querySelectorAll('.device-statistics .info-item label');
        if (statsLabels.length >= 6) {
            statsLabels[0].textContent = translations[lang]['total-distance'];
            statsLabels[1].textContent = translations[lang]['total-operating-time'];
            statsLabels[2].textContent = translations[lang]['average-speed'];
            statsLabels[3].textContent = translations[lang]['mission-success-rate'];
            statsLabels[4].textContent = translations[lang]['average-mission-time'];
            statsLabels[5].textContent = translations[lang]['maintenance-intervals'];
        }
    }
    
    // Update footer
    document.querySelector('.footer p').textContent = translations[lang]['footer'];
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);