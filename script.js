/**
 * 机器人管理系统 - 主脚本
 * 纯中文版本 - 严格遵循UI设计规范
 */

// ============================================
// 全局状态
// ============================================
const state = {
    currentPage: 'task-list',
    currentTaskId: null,
    currentDeviceId: null,
    tasks: [],
    devices: [],
    queue: []
};

// ============================================
// 模拟数据
// ============================================
const mockTasks = [
    {
        id: '#12345',
        type: '飞速达',
        name: '包裹配送至3楼',
        status: 'en_route',
        robot: '机器人 #7',
        area: 'C11',
        estimatedTime: '14:45:30',
        priority: 'medium',
        startLocation: '1楼大厅',
        targetLocation: '3楼301室',
        createdTime: '14:30:00',
        description: '配送文件包裹至3楼行政部',
        progress: 60
    },
    {
        id: '#12346',
        type: '12-3',
        name: '客房服务配送',
        status: 'executing',
        robot: '机器人 #3',
        area: 'C12',
        estimatedTime: '14:50:00',
        priority: 'high',
        startLocation: '服务台',
        targetLocation: '1203房间',
        createdTime: '14:35:00',
        description: '配送客房服务至12楼',
        progress: 45
    },
    {
        id: '#12347',
        type: '机场行李运输',
        name: '机场行李运输',
        status: 'pending',
        robot: '机器人 #9',
        area: '复材车间',
        estimatedTime: '15:00:00',
        priority: 'low',
        startLocation: '行李提取处',
        targetLocation: '航站楼B区',
        createdTime: '14:40:00',
        description: '运输旅客行李至指定区域',
        progress: 0
    },
    {
        id: '#12348',
        type: '配送',
        name: '仓库库存移动',
        status: 'assigned',
        robot: '机器人 #5',
        area: 'C13',
        estimatedTime: '15:15:00',
        priority: 'medium',
        startLocation: 'A区货架',
        targetLocation: 'B区暂存区',
        createdTime: '14:42:00',
        description: '库存整理和移动任务',
        progress: 0
    },
    {
        id: '#12349',
        type: '飞速达',
        name: '文件配送至行政部',
        status: 'completed',
        robot: '机器人 #2',
        area: 'C11',
        estimatedTime: '-',
        priority: 'medium',
        startLocation: '前台',
        targetLocation: '行政部',
        createdTime: '14:15:00',
        description: '紧急文件配送任务',
        progress: 100
    }
];

const mockDevices = [
    {
        id: 'TZ123_001',
        name: '天体0号',
        type: '机器人',
        model: 'TZC123',
        brand: 'Tianti',
        status: 'online',
        battery: 85,
        currentTask: '任务 #12345',
        location: '2楼 办公室'
    },
    {
        id: 'MIR-001',
        name: 'MiR200',
        type: '机器人',
        model: 'MiR200',
        brand: 'MiR',
        status: 'offline',
        battery: 0,
        currentTask: '-',
        location: '未知'
    },
    {
        id: 'ELV-001',
        name: '电梯-1',
        type: '电梯',
        model: 'Gen2',
        brand: 'Otis',
        status: 'online',
        battery: null,
        currentTask: '-',
        location: 'A栋'
    }
];

const mockQueue = [
    {
        position: 1,
        id: '#Q1002',
        type: '12-3',
        name: '客房服务配送',
        status: 'executing',
        priority: 'high',
        robot: '机器人 #7',
        area: 'C12',
        createdTime: '14:20:00'
    },
    {
        position: 2,
        id: '#Q1005',
        type: '飞速达',
        name: '包裹配送',
        status: 'executing',
        priority: 'medium',
        robot: '机器人 #3',
        area: 'C11',
        createdTime: '14:15:00'
    },
    {
        position: 3,
        id: '#Q1001',
        type: '飞速达',
        name: '包裹配送至3楼',
        status: 'pending',
        priority: 'high',
        robot: '机器人 #3',
        area: 'C11',
        createdTime: '14:25:00'
    }
];

// ============================================
// 工具函数
// ============================================

function getStatusBadge(status) {
    const statusMap = {
        'pending': { text: '待处理', class: 'bg-warning' },
        'assigned': { text: '已分配', class: 'bg-primary' },
        'en_route': { text: '在途中', class: 'bg-success' },
        'executing': { text: '执行中', class: 'bg-executing' },
        'completed': { text: '已完成', class: 'bg-success' },
        'failed': { text: '失败', class: 'bg-error' },
        'online': { text: '在线', class: 'bg-success' },
        'offline': { text: '离线', class: 'bg-error' },
        'maintenance': { text: '维护中', class: 'bg-warning' }
    };
    const config = statusMap[status] || { text: status, class: 'bg-neutral' };
    return `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.class} text-white">${config.text}</span>`;
}

function getPriorityBadge(priority) {
    const priorityMap = {
        'high': { text: '高', class: 'bg-error' },
        'medium': { text: '普通', class: 'bg-success' },
        'low': { text: '低', class: 'bg-neutral' }
    };
    const config = priorityMap[priority] || { text: priority, class: 'bg-neutral' };
    return `<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${config.class} text-white">${config.text}</span>`;
}

// ============================================
// 页面导航
// ============================================

function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // 更新导航状态
    document.querySelectorAll('[id^="nav-"]').forEach(nav => {
        nav.classList.remove('bg-primary');
    });
    
    const navItem = document.getElementById('nav-' + pageId);
    if (navItem) {
        navItem.classList.add('bg-primary');
    }
    
    state.currentPage = pageId;
    
    // 更新页面标题
    updatePageTitle(pageId);
    
    // 根据页面加载数据
    switch (pageId) {
        case 'task-list':
            renderTaskList();
            break;
        case 'task-queue':
            renderTaskQueue();
            break;
        case 'device-list':
            renderDeviceList();
            break;
    }
}

function updatePageTitle(pageId) {
    const titles = {
        'task-list': { title: '任务列表', subtitle: '查看和管理所有任务' },
        'task-queue': { title: '任务队列', subtitle: '管理任务优先级和执行顺序' },
        'device-list': { title: '设备列表', subtitle: '管理和监控所有已注册设备' },
        'models': { title: '型号管理', subtitle: '管理设备型号和配置' }
    };
    
    const config = titles[pageId] || { title: '机器人管理系统', subtitle: '' };
    document.getElementById('page-title').textContent = config.title;
    document.getElementById('page-subtitle').textContent = config.subtitle;
}

// ============================================
// 任务管理
// ============================================

function renderTaskList() {
    const tbody = document.getElementById('task-table-body');
    
    tbody.innerHTML = mockTasks.map(task => `
        <tr class="hover:bg-bg-light cursor-pointer transition-colors" onclick="showTaskDetails('${task.id}')">
            <td class="px-4 py-3 text-sm text-primary font-medium">${task.id}</td>
            <td class="px-4 py-3 text-sm text-text-primary">${task.type}</td>
            <td class="px-4 py-3 text-sm text-text-primary">${task.name}</td>
            <td class="px-4 py-3">${getStatusBadge(task.status)}</td>
            <td class="px-4 py-3 text-sm text-text-primary">${task.robot}</td>
            <td class="px-4 py-3 text-sm text-text-primary">${task.area}</td>
            <td class="px-4 py-3 text-sm text-text-primary">${task.estimatedTime}</td>
            <td class="px-4 py-3">${getPriorityBadge(task.priority)}</td>
            <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                    <button onclick="event.stopPropagation(); showTaskDetails('${task.id}')" class="px-3 py-1.5 text-xs font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">查看详情</button>
                    <button onclick="event.stopPropagation(); deleteTask('${task.id}')" class="px-3 py-1.5 text-xs font-medium text-error border border-error rounded hover:bg-error hover:text-white transition-colors">删除</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function showTaskDetails(taskId) {
    const task = mockTasks.find(t => t.id === taskId);
    if (!task) return;
    
    state.currentTaskId = taskId;
    
    showPage('task-details');
}

function deleteTask(taskId) {
    if (confirm('确定要删除此任务吗？')) {
        const index = mockTasks.findIndex(t => t.id === taskId);
        if (index > -1) {
            mockTasks.splice(index, 1);
            renderTaskList();
            showPage('task-list');
        }
    }
}

function renderTaskQueue() {
    const tbody = document.getElementById('queue-table-body');
    
    const executingTasks = mockQueue.filter(t => t.status === 'executing');
    const pendingTasks = mockQueue.filter(t => t.status === 'pending');
    
    let html = '';
    
    executingTasks.forEach(task => {
        html += `
            <tr class="bg-running-bg hover:bg-blue-50 transition-colors">
                <td class="px-4 py-3">
                    <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-executing text-white font-bold text-sm">${task.position}</span>
                </td>
                <td class="px-4 py-3 text-sm text-primary font-medium">${task.id}</td>
                <td class="px-4 py-3 text-sm text-text-primary">${task.type}</td>
                <td class="px-4 py-3 text-sm text-text-primary">${task.name}</td>
                <td class="px-4 py-3">
                    <span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-executing text-white">
                        <svg class="w-3 h-3 mr-1 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                        </svg>
                        运行中
                    </span>
                </td>
                <td class="px-4 py-3">${getPriorityBadge(task.priority)}</td>
                <td class="px-4 py-3 text-sm text-text-primary">${task.robot}</td>
                <td class="px-4 py-3 text-sm text-text-primary">${task.area}</td>
                <td class="px-4 py-3 text-sm text-text-secondary">${task.createdTime}</td>
                <td class="px-4 py-3">
                    <button onclick="showTaskDetails('${task.id}')" class="px-3 py-1.5 text-xs font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">查看详情</button>
                </td>
            </tr>
        `;
    });
    
    if (pendingTasks.length > 0) {
        html += `
            <tr class="bg-bg-light">
                <td colspan="10" class="px-4 py-2">
                    <div class="flex items-center gap-2 text-text-secondary text-sm">
                        <div class="flex-1 h-px bg-border-gray"></div>
                        <span>待处理任务</span>
                        <div class="flex-1 h-px bg-border-gray"></div>
                    </div>
                </td>
            </tr>
        `;
        
        pendingTasks.forEach(task => {
            html += `
                <tr class="hover:bg-bg-light transition-colors">
                    <td class="px-4 py-3">
                        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full bg-warning text-white font-bold text-sm">${task.position}</span>
                    </td>
                    <td class="px-4 py-3 text-sm text-primary font-medium">${task.id}</td>
                    <td class="px-4 py-3 text-sm text-text-primary">${task.type}</td>
                    <td class="px-4 py-3 text-sm text-text-primary">${task.name}</td>
                    <td class="px-4 py-3">${getStatusBadge(task.status)}</td>
                    <td class="px-4 py-3">${getPriorityBadge(task.priority)}</td>
                    <td class="px-4 py-3 text-sm text-text-primary">${task.robot}</td>
                    <td class="px-4 py-3 text-sm text-text-primary">${task.area}</td>
                    <td class="px-4 py-3 text-sm text-text-secondary">${task.createdTime}</td>
                    <td class="px-4 py-3">
                        <div class="flex items-center gap-2">
                            <button class="p-1.5 rounded border border-border-gray text-text-secondary hover:text-primary hover:border-primary transition-colors" title="上移">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
                                </svg>
                            </button>
                            <button class="p-1.5 rounded border border-border-gray text-text-secondary hover:text-primary hover:border-primary transition-colors" title="下移">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <button onclick="showTaskDetails('${task.id}')" class="px-3 py-1.5 text-xs font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">查看</button>
                            <button class="px-3 py-1.5 text-xs font-medium text-error border border-error rounded hover:bg-error hover:text-white transition-colors">移除</button>
                        </div>
                    </td>
                </tr>
            `;
        });
    }
    
    tbody.innerHTML = html;
}

// ============================================
// 设备管理
// ============================================

function renderDeviceList() {
    const tbody = document.getElementById('device-table-body');
    
    tbody.innerHTML = mockDevices.map(device => `
        <tr class="hover:bg-bg-light cursor-pointer transition-colors ${device.status === 'offline' ? 'bg-error/5' : ''}" onclick="showDeviceDetails('${device.id}')">
            <td class="px-4 py-3 text-sm text-primary font-medium">${device.id}</td>
            <td class="px-4 py-3 text-sm text-text-primary">${device.name}</td>
            <td class="px-4 py-3">
                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${device.type === '机器人' ? 'bg-primary/10 text-primary' : 'bg-executing/10 text-executing'}">${device.type}</span>
            </td>
            <td class="px-4 py-3 text-sm text-text-primary">${device.model}</td>
            <td class="px-4 py-3 text-sm text-text-primary">${device.brand}</td>
            <td class="px-4 py-3">${getStatusBadge(device.status)}</td>
            <td class="px-4 py-3">
                ${device.battery !== null ? `
                    <div class="flex items-center gap-2">
                        <div class="w-16 h-2 bg-border-gray rounded-full overflow-hidden">
                            <div class="h-full ${device.battery < 20 ? 'bg-error' : 'bg-success'} rounded-full" style="width: ${device.battery}%"></div>
                        </div>
                        <span class="text-xs font-medium ${device.battery < 20 ? 'text-error' : 'text-text-primary'}">${device.battery}%</span>
                    </div>
                ` : '<span class="text-xs text-text-light">不适用</span>'}
            </td>
            <td class="px-4 py-3 text-sm ${device.currentTask === '-' ? 'text-text-light' : 'text-text-primary'}">${device.currentTask}</td>
            <td class="px-4 py-3 text-sm ${device.location === '未知' ? 'text-text-light' : 'text-text-primary'}">${device.location}</td>
            <td class="px-4 py-3">
                <div class="flex items-center gap-2">
                    <button onclick="event.stopPropagation(); showDeviceDetails('${device.id}')" class="px-3 py-1.5 text-xs font-medium text-primary border border-primary rounded hover:bg-primary hover:text-white transition-colors">查看</button>
                    <button onclick="event.stopPropagation();" class="px-3 py-1.5 text-xs font-medium text-neutral border border-neutral rounded hover:bg-neutral hover:text-white transition-colors">编辑</button>
                    <button onclick="event.stopPropagation();" class="px-3 py-1.5 text-xs font-medium text-error border border-error rounded hover:bg-error hover:text-white transition-colors">删除</button>
                </div>
            </td>
        </tr>
    `).join('');
}

function showDeviceDetails(deviceId) {
    const device = mockDevices.find(d => d.id === deviceId);
    if (!device) return;
    
    state.currentDeviceId = deviceId;
    
    showPage('device-details');
}

// ============================================
// UI 交互函数
// ============================================

function toggleSubmenu(submenuId, arrowId) {
    const submenu = document.getElementById(submenuId);
    const arrow = document.getElementById(arrowId);
    
    if (submenu && arrow) {
        submenu.classList.toggle('expanded');
        arrow.classList.toggle('rotate-180');
    }
}

function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    dropdown.classList.toggle('hidden');
}

function setLanguage(lang) {
    const langNames = { 'en': 'English', 'zh': '中文' };
    document.getElementById('current-lang').textContent = langNames[lang];
    document.getElementById('language-dropdown').classList.add('hidden');
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
    
    // 重置添加设备模态框
    if (modalId === 'add-device-modal') {
        document.getElementById('modal-step-1').classList.remove('hidden');
        document.getElementById('modal-step-2').classList.add('hidden');
        document.getElementById('modal-verify-btn').classList.remove('hidden');
        document.getElementById('modal-add-btn').classList.add('hidden');
    }
}

function showStep2() {
    document.getElementById('modal-step-1').classList.add('hidden');
    document.getElementById('modal-step-2').classList.remove('hidden');
    document.getElementById('modal-verify-btn').classList.add('hidden');
    document.getElementById('modal-add-btn').classList.remove('hidden');
}

function addDevice() {
    closeModal('add-device-modal');
    alert('设备添加成功！');
}

function refreshTaskList() {
    renderTaskList();
    alert('任务列表已刷新！');
}

// ============================================
// 事件监听
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // 初始化数据
    state.tasks = [...mockTasks];
    state.devices = [...mockDevices];
    state.queue = [...mockQueue];
    
    // 渲染初始页面
    renderTaskList();
    
    // 初始化图表
    setTimeout(() => {
        const velocityCtx = document.getElementById('velocityChart');
        const accelerationCtx = document.getElementById('accelerationChart');
        
        if (velocityCtx && accelerationCtx) {
            function generateData(points, min, max) {
                const data = [];
                for (let i = 0; i < points; i++) {
                    data.push(Math.random() * (max - min) + min);
                }
                return data;
            }

            const labels = Array.from({length: 60}, (_, i) => i + '秒');

            new Chart(velocityCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '速度 (m/s)',
                        data: generateData(60, 0, 1.5),
                        borderColor: '#3498db',
                        backgroundColor: 'rgba(52, 152, 219, 0.1)',
                        fill: true,
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        y: { min: 0, max: 2, ticks: { callback: value => value + ' m/s' } },
                        x: { ticks: { maxTicksLimit: 10 } }
                    }
                }
            });

            new Chart(accelerationCtx.getContext('2d'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: '加速度',
                        data: generateData(60, -1.5, 1.5),
                        borderColor: '#e74c3c',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        pointRadius: 0
                    }, {
                        label: '角加速度',
                        data: generateData(60, -1, 1),
                        borderColor: '#27ae60',
                        backgroundColor: 'transparent',
                        tension: 0.4,
                        pointRadius: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { position: 'bottom', labels: { boxWidth: 12, padding: 15 } } },
                    scales: {
                        y: { min: -2, max: 2 },
                        x: { ticks: { maxTicksLimit: 10 } }
                    }
                }
            });
        }
    }, 500);
    
    // 点击外部关闭语言下拉
    document.addEventListener('click', function(e) {
        if (!e.target.closest('#language-dropdown') && !e.target.closest('button[onclick="toggleLanguageDropdown()"]')) {
            document.getElementById('language-dropdown').classList.add('hidden');
        }
    });
    
    // 新建任务表单提交
    const createTaskForm = document.getElementById('create-task-form');
    if (createTaskForm) {
        createTaskForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(createTaskForm);
            const newTask = {
                id: '#1235' + (mockTasks.length + 1),
                name: formData.get('taskName'),
                type: formData.get('taskType') === 'transport' ? '物料运输' : 
                      formData.get('taskType') === 'patrol' ? '巡检' :
                      formData.get('taskType') === 'inspection' ? '检测' : '抓取放置',
                status: 'pending',
                priority: formData.get('priority'),
                robot: '未分配',
                area: '-',
                estimatedTime: '-',
                startLocation: formData.get('startLocation'),
                targetLocation: formData.get('targetLocation'),
                createdTime: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                description: formData.get('description') || '',
                progress: 0
            };
            
            mockTasks.unshift(newTask);
            renderTaskList();
            closeModal('create-task-modal');
            createTaskForm.reset();
            alert('任务创建成功！');
        });
    }
});

// 搜索和筛选
document.getElementById('task-search')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('#task-table-body tr');
    
    rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
    });
});

document.getElementById('task-status-filter')?.addEventListener('change', function(e) {
    const status = e.target.value;
    const rows = document.querySelectorAll('#task-table-body tr');
    
    rows.forEach(row => {
        if (!status) {
            row.style.display = '';
            return;
        }
        
        const statusCell = row.querySelector('td:nth-child(4)');
        if (statusCell) {
            const hasStatus = statusCell.innerHTML.includes(getStatusBadge(status));
            row.style.display = hasStatus ? '' : 'none';
        }
    });
});

function setTaskView(view) {
    const tableView = document.getElementById('table-view');
    const treeView = document.getElementById('tree-view');
    const tableBtn = document.getElementById('table-view-btn');
    const treeBtn = document.getElementById('tree-view-btn');
    
    if (view === 'table') {
        tableView.classList.remove('hidden');
        treeView.classList.add('hidden');
        tableBtn.classList.add('bg-primary', 'text-white', 'border-primary');
        tableBtn.classList.remove('bg-bg-light', 'text-text-primary', 'border-border-gray');
        treeBtn.classList.remove('bg-primary', 'text-white', 'border-primary');
        treeBtn.classList.add('bg-bg-light', 'text-text-primary', 'border-border-gray');
    } else {
        treeView.classList.remove('hidden');
        tableView.classList.add('hidden');
        treeBtn.classList.add('bg-primary', 'text-white', 'border-primary');
        treeBtn.classList.remove('bg-bg-light', 'text-text-primary', 'border-border-gray');
        tableBtn.classList.remove('bg-primary', 'text-white', 'border-primary');
        tableBtn.classList.add('bg-bg-light', 'text-text-primary', 'border-border-gray');
    }
}
