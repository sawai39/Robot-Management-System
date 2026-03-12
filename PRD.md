# Product Requirements Document (PRD)
# Robot Management System

**Document Version:** 1.0  
**Date:** March 12, 2026  
**Status:** Draft  

---

## Table of Contents

1. [Product Overview](#1-product-overview)
2. [User Personas](#2-user-personas)
3. [Feature Specifications](#3-feature-specifications)
4. [User Stories and Acceptance Criteria](#4-user-stories-and-acceptance-criteria)
5. [UI/UX Requirements](#5-uiux-requirements)
6. [Technical Requirements](#6-technical-requirements)

---

## 1. Product Overview

### 1.1 Product Vision

The Robot Management System is a comprehensive web-based platform designed to manage, monitor, and coordinate autonomous mobile robots and related devices in industrial and commercial environments. The system provides real-time visibility into robot operations, task management, device health monitoring, and multi-language support for global deployment.

### 1.2 Product Goals

- **Operational Efficiency**: Streamline robot fleet management through centralized task assignment and monitoring
- **Real-time Monitoring**: Provide live updates on robot locations, battery levels, and task progress
- **Multi-language Support**: Enable global deployment with support for English, Chinese, and Japanese
- **Device Management**: Comprehensive device lifecycle management from registration to maintenance tracking
- **Task Coordination**: Efficient task queue management with priority-based scheduling

### 1.3 Target Users

- Robot Fleet Managers
- Operations Supervisors
- Maintenance Technicians
- System Administrators
- Warehouse/Facility Managers

### 1.4 Success Metrics

| Metric | Target | Measurement Method |
|--------|--------|-------------------|
| Task Completion Rate | >95% | Completed tasks / Total assigned tasks |
| System Uptime | 99.9% | Server availability monitoring |
| User Adoption Rate | >80% | Active users / Total registered users |
| Average Response Time | <2 seconds | Page load time monitoring |
| Multi-language Usage | All 3 languages used | Language selection analytics |

---

## 2. User Personas

### 2.1 Persona 1: Fleet Manager - Zhang Wei

**Demographics:**
- Role: Fleet Operations Manager
- Experience: 8 years in logistics and automation
- Location: Manufacturing facility in Shanghai
- Technical Proficiency: Advanced

**Goals:**
- Monitor all robots in real-time
- Assign and prioritize tasks efficiently
- Track fleet performance metrics
- Manage device maintenance schedules

**Pain Points:**
- Difficulty tracking multiple robots simultaneously
- Manual task assignment is time-consuming
- Lack of visibility into robot health status
- Language barriers with international team members

**Use Cases:**
- View task queue and adjust priorities
- Monitor robot battery levels and locations
- Generate performance reports
- Manage device registrations

### 2.2 Persona 2: Maintenance Technician - Tanaka Kenji

**Demographics:**
- Role: Senior Maintenance Technician
- Experience: 12 years in robotics maintenance
- Location: Distribution center in Tokyo
- Technical Proficiency: Expert

**Goals:**
- Monitor device health and performance
- Schedule and track maintenance activities
- Access device specifications and history
- Troubleshoot device issues remotely

**Pain Points:**
- Lack of centralized device information
- Difficulty predicting maintenance needs
- Manual record-keeping of maintenance activities
- Limited access to real-time device data

**Use Cases:**
- View device details and specifications
- Monitor real-time device metrics
- Access maintenance history
- Update device status

### 2.3 Persona 3: Operations Supervisor - Sarah Johnson

**Demographics:**
- Role: Warehouse Operations Supervisor
- Experience: 5 years in warehouse management
- Location: Distribution center in Los Angeles
- Technical Proficiency: Intermediate

**Goals:**
- Oversee daily robot operations
- Ensure task completion on schedule
- Manage work area assignments
- Coordinate with fleet managers

**Pain Points:**
- Limited visibility into task progress
- Difficulty managing task priorities
- Lack of real-time operational insights
- Communication gaps with technical teams

**Use Cases:**
- Monitor task list and status
- View task details and progress
- Adjust task priorities in queue
- Track robot locations

---

## 3. Feature Specifications

### 3.1 Navigation System

#### 3.1.1 Sidebar Navigation

**Description:**  
A persistent sidebar navigation panel that provides access to all major modules of the system.

**Components:**
- **Tasks Module** (expandable submenu)
  - Task List
  - Task Queue
- **Devices Module**
- **Models Module**
- **Dashboard Module** (placeholder)
- **Reports Module** (placeholder)

**Functional Requirements:**
- FR-NAV-001: Sidebar shall display system title "Robot Management System"
- FR-NAV-002: Active navigation item shall be highlighted with blue background
- FR-NAV-003: Tasks module shall expand/collapse to show sub-navigation items
- FR-NAV-004: Navigation items shall change appearance on hover
- FR-NAV-005: Sidebar shall remain visible at all times (fixed position)

**Non-Functional Requirements:**
- NFR-NAV-001: Navigation transitions shall complete within 300ms
- NFR-NAV-002: Sidebar shall support responsive design for mobile devices

**UI Elements:**
- Sidebar width: 250px
- Background color: #2c3e50 (dark blue-gray)
- Active state color: #3498db (blue)
- Font size: 14-18px

#### 3.1.2 Sub-navigation

**Description:**  
Expandable submenu for the Tasks module providing access to Task List and Task Queue.

**Functional Requirements:**
- FR-SUBNAV-001: Submenu shall expand on click or hover
- FR-SUBNAV-002: Active sub-item shall be highlighted
- FR-SUBNAV-003: Submenu shall have darker background (#233140)
- FR-SUBNAV-004: Sub-items shall be indented to show hierarchy

---

### 3.2 Task Management

#### 3.2.1 Task List

**Description:**  
A comprehensive list view of all tasks with search, filter, and pagination capabilities.

**Functional Requirements:**

**Search and Filter:**
- FR-TL-001: System shall provide search input for task name/ID search
- FR-TL-002: System shall provide status filter with options: All Statuses, Pending, Assigned, En Route, Executing, Completed, Failed
- FR-TL-003: System shall provide robot filter with options: All Robots, Robot #1-#5
- FR-TL-004: Search shall trigger on Enter key press or search button click
- FR-TL-005: Filters shall apply immediately on selection

**Task Table:**
- FR-TL-006: Table shall display columns: Task ID, Task Type, Task Name, Status, Robot, Work Area, ETA, Priority, Actions
- FR-TL-007: Each row shall be clickable to view task details
- FR-TL-008: Status badges shall display with color coding:
  - Pending: Orange (#f39c12)
  - Assigned: Blue (#3498db)
  - En Route: Green (#27ae60)
  - Executing: Purple (#9b59b6)
  - Completed: Green (#27ae60)
  - Failed: Red (#e74c3c)
- FR-TL-009: Priority badges shall display with color coding:
  - High: Red (#e74c3c)
  - Normal: Green (#27ae60)
  - Low: Gray (#95a5a6)
- FR-TL-010: Actions column shall include "View Details" and "Delete" buttons

**Pagination:**
- FR-TL-011: System shall display pagination controls
- FR-TL-012: Active page shall be highlighted
- FR-TL-013: Previous/Next buttons shall be provided

**Action Buttons:**
- FR-TL-014: "Add New Task" button shall be available
- FR-TL-015: "Refresh" button shall reload task list

**Data Fields:**
| Field | Type | Description | Example |
|-------|------|-------------|---------|
| Task ID | String | Unique task identifier | Task #12345 |
| Task Type | String | Category of task | 飞速达, 12-3, 机场行李运输 |
| Task Name | String | Descriptive task name | Package Delivery to Floor 3 |
| Status | Enum | Current task status | En Route, Executing, Completed |
| Robot | String | Assigned robot identifier | Robot #7 |
| Work Area | String | Designated work area code | C11, C12, 复材车间 |
| ETA | Time | Estimated completion time | 14:45:30 |
| Priority | Enum | Task priority level | High, Normal, Low |

#### 3.2.2 Task Details

**Description:**  
Detailed view of a single task with comprehensive information, robot location map, and task steps.

**Functional Requirements:**

**Navigation:**
- FR-TD-001: "Back to Task List" button shall return to task list
- FR-TD-002: Task details shall load when clicking on task row or "View Details" button

**Task Information Grid:**
- FR-TD-003: System shall display task information in a grid layout:
  - Task ID
  - Task Type
  - Task Name
  - Status (with badge)
  - Priority (with badge)
  - Robot
  - Current Location
  - Work Area
  - ETA
  - Start Time
  - Estimated Duration
  - Progress (with progress bar)
- FR-TD-004: Progress bar shall visually indicate task completion percentage
- FR-TD-005: Delete button shall be available for task deletion

**Robot Location Map:**
- FR-TD-006: System shall display a visual map showing robot's current location
- FR-TD-007: Map shall show building layout with floors
- FR-TD-008: Robot marker shall be displayed with animation
- FR-TD-009: Active location shall be highlighted
- FR-TD-010: Location description text shall be provided

**Task Steps:**
- FR-TD-011: System shall display task execution steps
- FR-TD-012: View toggle button shall switch between Table View and Tree View
- FR-TD-013: Table View shall display columns: Step, Status, Start Time, End Time, Duration, Details
- FR-TD-014: Tree View shall display hierarchical step structure with:
  - Node icons
  - Status indicators (completed, executing, pending)
  - Time and duration details
  - Nested child steps
- FR-TD-015: Each step status shall be visually indicated:
  - Completed: Green checkmark
  - Executing: Purple lightning bolt with animation
  - Pending: Orange hourglass

**Task Steps Data Structure:**
| Step | Status | Start Time | End Time | Duration | Details |
|------|--------|------------|----------|----------|---------|
| 1. Leave Charging Station | Completed | 14:32:15 | 14:32:47 | 32s | Robot left charging station successfully |
| 2. Navigate to Elevator | Completed | 14:32:47 | 14:33:20 | 33s | Robot navigated to elevator on 1st floor |
| 3. Wait for Elevator | Completed | 14:33:20 | 14:34:05 | 45s | Robot waited for elevator to arrive |
| 4. Take Elevator to 3rd Floor | Executing | 14:34:05 | - | 25s | Robot is currently in elevator |
| 5. Navigate to Room 301 | Pending | - | - | - | Robot will navigate to Room 301 |
| 6. Deliver Package | Pending | - | - | - | Robot will deliver package to recipient |

#### 3.2.3 Task Queue

**Description:**  
Priority-ordered queue of pending and running tasks with position adjustment controls.

**Functional Requirements:**

**Queue Statistics:**
- FR-TQ-001: System shall display queue statistics cards:
  - Pending Tasks count
  - In Progress count
  - Completed Today count
- FR-TQ-002: Statistics shall update in real-time

**Search and Filter:**
- FR-TQ-003: System shall provide search input for queue search
- FR-TQ-004: System shall provide priority filter: All Priorities, High, Normal, Low
- FR-TQ-005: System shall provide robot filter: All Robots, Robot #1-#5
- FR-TQ-006: System shall provide work area filter: All Work Areas, C11, C12, C13, etc.

**Queue Table:**
- FR-TQ-007: Table shall display columns: Queue Position, Task ID, Task Type, Task Name, Status, Priority, Assigned Robot, Work Area, Created, Actions
- FR-TQ-008: Running tasks shall have highlighted background (#e8f4fc)
- FR-TQ-009: Running tasks shall not have position controls
- FR-TQ-010: Pending tasks shall have position controls (up/down arrows)

**Position Controls:**
- FR-TQ-011: Move Up button shall increase task priority (move up in queue)
- FR-TQ-012: Move Down button shall decrease task priority (move down in queue)
- FR-TQ-013: First pending task's Move Up button shall be disabled
- FR-TQ-014: Last pending task's Move Down button shall be disabled
- FR-TQ-015: Position numbers shall update automatically after reordering
- FR-TQ-016: Position controls shall only affect pending tasks, not running tasks

**Action Buttons:**
- FR-TQ-017: "Add to Queue" button shall be available
- FR-TQ-018: "Refresh" button shall reload queue
- FR-TQ-019: "View Details" button shall navigate to task details
- FR-TQ-020: "Remove" button shall remove task from queue

**Queue Position Logic:**
- Running tasks occupy positions 1, 2, etc. (cannot be reordered)
- Pending tasks follow running tasks in queue
- Position numbers are sequential and update on reorder

---

### 3.3 Device Management

#### 3.3.1 Device List

**Description:**  
Comprehensive list of all registered devices including robots, elevators, and doors.

**Functional Requirements:**

**Search and Filter:**
- FR-DL-001: System shall provide search input for device search
- FR-DL-002: System shall provide type filter: All Types, Robots, Elevators, Doors
- FR-DL-003: System shall provide status filter: All Statuses, Online, Offline, Maintenance

**Device Table:**
- FR-DL-004: Table shall display columns: Device ID, Device Name, Model, Brand, Status, Battery, Current Task, Location, Actions
- FR-DL-005: Status badges shall display with color coding:
  - Online: Green (#27ae60)
  - Offline: Red (#e74c3c)
  - Maintenance: Orange (#f39c12)
- FR-DL-006: Battery level shall display as percentage with visual indicator
- FR-DL-007: Each row shall be clickable to view device details

**Action Buttons:**
- FR-DL-008: "Add New Device" button shall open device registration modal
- FR-DL-009: "Refresh" button shall reload device list
- FR-DL-010: "View Details" button shall navigate to device details
- FR-DL-011: "Edit" button shall open device edit form
- FR-DL-012: "Delete" button shall remove device (with confirmation)

**Pagination:**
- FR-DL-013: System shall display pagination controls
- FR-DL-014: Active page shall be highlighted

**Device Types:**
| Type | Examples | Battery Display |
|------|----------|-----------------|
| Robot | 天体0号, XG-R1, MiR200 | Yes (%) |
| Elevator | Elevator-1 | N/A |
| Door | Main Entrance | N/A |

**Supported Brands:**
- Tianti (天体)
- XG-R1 (仙工)
- MiR
- Otis
- Assa Abloy

#### 3.3.2 Device Details

**Description:**  
Comprehensive device information page with real-time monitoring, specifications, and statistics.

**Functional Requirements:**

**Navigation:**
- FR-DD-001: "Back to Device List" button shall return to device list
- FR-DD-002: Device details shall load when clicking on device row or "View Details" button

**Basic Information Section:**
- FR-DD-003: System shall display device image
- FR-DD-004: System shall display basic info grid:
  - Device ID
  - Device Name
  - Model
  - Brand
  - Status (with badge)
  - Battery Level (with progress bar)
  - Location
- FR-DD-005: Action buttons shall include: Edit Device, Reboot, Delete

**Real-time Information Section:**
- FR-DD-006: System shall display real-time data in four subsections:
  
  **Connection & Mission:**
  - Connection State (Online/Offline)
  - Current Mission
  
  **Location:**
  - Current Location
  - Coordinates (X, Y, Floor)
  - Visual map snippet
  
  **Battery & Power:**
  - State of Charge (%)
  - Status (Charging/Discharging)
  - Time Remaining
  - Temperature
  
  **Movement & Safety:**
  - Current Speed (m/s)
  - Direction
  - Safety Status (Normal/Warning)
  - E-Stop Status (Active/Not Active)

**Real-time Graphs:**
- FR-DD-007: System shall display Velocity Over Time chart
- FR-DD-008: System shall display Acceleration & Angular Acceleration chart
- FR-DD-009: Charts shall update every 1 second
- FR-DD-010: Charts shall display last 60 seconds of data
- FR-DD-011: Charts shall use Chart.js library

**Static Specifications Section:**
- FR-DD-012: System shall display specifications in three subsections:
  
  **Physical Dimensions:**
  - Length x Width x Height
  - Turn Radius
  
  **Operational Capabilities:**
  - Max Speed (Laden)
  - Max Speed (Unladen)
  - Max Payload
  - Lift Height
  
  **Interfaces & Connectivity:**
  - Communication Protocol
  - I/O Ports
  - IP Address
  - MAC Address

**Statistics Section:**
- FR-DD-013: System shall display statistics in two subsections:
  
  **Odometry Data:**
  - Total Distance Traveled
  - Total Operating Time
  - Average Speed
  
  **Performance Metrics:**
  - Task type table with Success Rate and Average Time
  - Mission Success Rate
  - Average Mission Time
  - Maintenance Intervals

**Recent Activity:**
- FR-DD-014: System shall display recent activity log table
- FR-DD-015: Table shall include columns: Time, Activity, Details
- FR-DD-016: Activities shall include: Status Change, Maintenance, Task Completed, System Boot

**Device Data Structure:**
```json
{
  "id": "TZ123_001",
  "name": "天体0号",
  "type": "Robot",
  "model": "TZC123",
  "brand": "Tianti",
  "status": "online",
  "battery": 85,
  "location": "2nd Floor, Office Area",
  "ip": "192.168.1.101",
  "mac": "00:1B:44:11:3A:B7",
  "realTime": {
    "connection": "Online",
    "mission": "Moving to Dock 5",
    "coordinates": "X: 12.5, Y: 8.3, Floor: 2",
    "batteryStatus": "Discharging",
    "timeRemaining": "2h 30m",
    "temperature": "25°C",
    "speed": "0.8 m/s",
    "direction": "North",
    "safetyStatus": "Normal",
    "eStop": "Not Active"
  },
  "specs": {
    "dimensions": "500mm x 400mm x 350mm",
    "turnRadius": "Zero (Differential Drive)",
    "maxSpeedLaden": "1.2 m/s",
    "maxSpeedUnladen": "1.5 m/s",
    "maxPayload": "50 kg",
    "liftHeight": "Not applicable",
    "communication": "WiFi 5GHz, Ethernet",
    "ioPorts": "2x USB, 1x RS-485"
  },
  "stats": {
    "distance": "1,245 meters",
    "operatingTime": "48 hours",
    "averageSpeed": "0.6 m/s",
    "missionSuccessRate": "98.5%",
    "averageMissionTime": "8.5 minutes"
  }
}
```

#### 3.3.3 Add Device Modal

**Description:**  
Two-step modal for registering new devices with authentication.

**Functional Requirements:**

**Step 1 - Authentication:**
- FR-ADM-001: Modal shall display model selection dropdown
- FR-ADM-002: Modal shall display connection password input
- FR-ADM-003: "Verify" button shall validate password
- FR-ADM-004: Hint text shall explain password requirement

**Step 2 - Device Registration:**
- FR-ADM-005: After verification, display Device ID input
- FR-ADM-006: Display Device Name input
- FR-ADM-007: "Add Device" button shall complete registration
- FR-ADM-008: "Cancel" button shall close modal

**Modal Behavior:**
- FR-ADM-009: Modal shall close when clicking outside modal area
- FR-ADM-010: Modal shall close when clicking X button
- FR-ADM-011: Form fields shall clear on modal close
- FR-ADM-012: Success message shall display after device added

---

### 3.4 Model Management

#### 3.4.1 Model List

**Description:**  
Categorized display of robot and device models organized by base model type.

**Functional Requirements:**

**Base Model Categories:**
- FR-ML-001: System shall organize models by base model categories:
  - 天体机器人 (Tianti Robots)
  - 米尔机器人 (MiR Robots)
  - 电梯 (Elevators)

**Model Cards:**
- FR-ML-002: Each model shall display as a card with:
  - Model Name (header)
  - Model ID (badge)
  - Base Model
  - Description
  - Status (Active/Inactive)
- FR-ML-003: Cards shall have hover effect (lift and shadow)
- FR-ML-004: "View Details" button shall be available on each card

**Action Buttons:**
- FR-ML-005: "Add New Model" button shall open add model modal
- FR-ML-006: "Refresh" button shall reload model list

**Model Categories:**

**天体机器人 (Tianti Robots):**
| Model Name | Model ID | Description |
|------------|----------|-------------|
| 抱箱机器人 | TBT-001 | Box carrying robot for indoor delivery |
| 12-3蜂巢车 | TBT-002 | Hive transport vehicle for warehouse |
| 新疆机场行李运送车 | TBT-003 | Airport luggage transport vehicle |

**米尔机器人 (MiR Robots):**
| Model Name | Model ID | Description |
|------------|----------|-------------|
| MIR-100 | MIR-001 | Standard industrial robot |

**电梯 (Elevators):**
| Model Name | Model ID | Description |
|------------|----------|-------------|
| ELEV-200 | ELV-001 | Standard elevator system |

#### 3.4.2 Add Model Modal

**Description:**  
Modal form for adding new robot/device models to the system.

**Functional Requirements:**

**Form Fields:**
- FR-AMM-001: Model Name input (required)
- FR-AMM-002: Base Model dropdown with options:
  - 天体机器人
  - 米尔机器人
  - 电梯
- FR-AMM-003: Model Description textarea (required)
- FR-AMM-004: Upload Model Description File input
  - Supported formats: .txt, .pdf, .doc, .docx

**Action Buttons:**
- FR-AMM-005: "Save Model" button shall validate and save
- FR-AMM-006: "Cancel" button shall close modal without saving
- FR-AMM-007: Close (X) button shall close modal

**Validation:**
- FR-AMM-008: All required fields must be filled
- FR-AMM-009: Error message shall display for missing required fields
- FR-AMM-010: Success message shall display after model saved

**Modal Behavior:**
- FR-AMM-011: Modal shall display with fade-in animation
- FR-AMM-012: Form shall reset after successful submission
- FR-AMM-013: Modal shall close on successful submission

---

### 3.5 Multi-language Support

#### 3.5.1 Language Switcher

**Description:**  
Global language selection control for switching between supported languages.

**Functional Requirements:**

**Language Options:**
- FR-MLANG-001: System shall support three languages:
  - English (en)
  - Chinese (zh) - Default
  - Japanese (ja)
- FR-MLANG-002: Language button shall display globe icon
- FR-MLANG-003: Dropdown shall appear on click
- FR-MLANG-004: Dropdown shall close when clicking outside
- FR-MLANG-005: Selected language shall apply immediately

**Translation Scope:**
- FR-MLANG-006: All UI text shall be translatable:
  - Navigation items
  - Page titles
  - Button labels
  - Table headers
  - Status badges
  - Form labels
  - Error messages
  - Footer text

**Language Persistence:**
- FR-MLANG-007: Selected language shall persist during session
- FR-MLANG-008: Default language shall be Chinese (zh)

**Translation Examples:**

| English | Chinese | Japanese |
|---------|---------|----------|
| Task List | 任务列表 | タスクリスト |
| Device List | 设备列表 | デバイスリスト |
| Model List | 模型列表 | モデルリスト |
| View Details | 查看详情 | 詳細を表示 |
| Delete | 删除 | 削除 |
| Pending | 待处理 | 保留中 |
| Completed | 已完成 | 完了 |
| Online | 在线 | オンライン |
| Offline | 离线 | オフライン |

---

## 4. User Stories and Acceptance Criteria

### 4.1 Navigation

#### US-NAV-001: Navigate to Task List
**As a** Fleet Manager  
**I want to** access the Task List from the sidebar  
**So that** I can view all current tasks

**Acceptance Criteria:**
- AC-NAV-001-1: Clicking "Tasks" in sidebar expands submenu
- AC-NAV-001-2: Clicking "Task List" navigates to task list page
- AC-NAV-001-3: Task List page displays with correct content
- AC-NAV-001-4: Navigation item is highlighted as active

#### US-NAV-002: Navigate to Task Queue
**As a** Fleet Manager  
**I want to** access the Task Queue from the sidebar  
**So that** I can manage task priorities

**Acceptance Criteria:**
- AC-NAV-002-1: Clicking "Task Queue" navigates to queue page
- AC-NAV-002-2: Queue statistics display correctly
- AC-NAV-002-3: Queue table shows pending and running tasks
- AC-NAV-002-4: Position controls are visible for pending tasks

#### US-NAV-003: Navigate to Device List
**As a** Maintenance Technician  
**I want to** access the Device List from the sidebar  
**So that** I can view all registered devices

**Acceptance Criteria:**
- AC-NAV-003-1: Clicking "Devices" navigates to device list page
- AC-NAV-003-2: Device table displays with all devices
- AC-NAV-003-3: Search and filter options are available
- AC-NAV-003-4: Navigation item is highlighted as active

#### US-NAV-004: Navigate to Model List
**As a** System Administrator  
**I want to** access the Model List from the sidebar  
**So that** I can manage robot and device models

**Acceptance Criteria:**
- AC-NAV-004-1: Clicking "Models" navigates to model list page
- AC-NAV-004-2: Models display organized by base model category
- AC-NAV-004-3: Model cards display with correct information
- AC-NAV-004-4: Add New Model button is available

### 4.2 Task Management

#### US-TASK-001: View Task List
**As a** Fleet Manager  
**I want to** view a list of all tasks  
**So that** I can monitor task status and progress

**Acceptance Criteria:**
- AC-TASK-001-1: Task table displays with all required columns
- AC-TASK-001-2: Status badges display with correct colors
- AC-TASK-001-3: Priority badges display with correct colors
- AC-TASK-001-4: Pagination controls are functional
- AC-TASK-001-5: Each row is clickable

#### US-TASK-002: Search and Filter Tasks
**As a** Fleet Manager  
**I want to** search and filter tasks  
**So that** I can quickly find specific tasks

**Acceptance Criteria:**
- AC-TASK-002-1: Search input accepts text input
- AC-TASK-002-2: Search triggers on Enter key or button click
- AC-TASK-002-3: Status filter applies immediately on selection
- AC-TASK-002-4: Robot filter applies immediately on selection
- AC-TASK-002-5: Multiple filters can be combined

#### US-TASK-003: View Task Details
**As an** Operations Supervisor  
**I want to** view detailed information about a task  
**So that** I can understand task progress and robot location

**Acceptance Criteria:**
- AC-TASK-003-1: Clicking task row opens details page
- AC-TASK-003-2: Task information grid displays all fields
- AC-TASK-003-3: Progress bar shows completion percentage
- AC-TASK-003-4: Robot location map displays with marker
- AC-TASK-003-5: Task steps display in tree view by default
- AC-TASK-003-6: View toggle switches between table and tree view

#### US-TASK-004: Delete Task
**As a** Fleet Manager  
**I want to** delete a task  
**So that** I can remove cancelled or unnecessary tasks

**Acceptance Criteria:**
- AC-TASK-004-1: Delete button displays confirmation dialog
- AC-TASK-004-2: Confirming deletion removes task from list
- AC-TASK-004-3: Success message displays after deletion
- AC-TASK-004-4: Canceling deletion preserves task

#### US-TASK-005: Manage Task Queue
**As a** Fleet Manager  
**I want to** reorder tasks in the queue  
**So that** I can prioritize urgent tasks

**Acceptance Criteria:**
- AC-TASK-005-1: Queue displays running and pending tasks
- AC-TASK-005-2: Position controls display for pending tasks only
- AC-TASK-005-3: Move Up button increases task priority
- AC-TASK-005-4: Move Down button decreases task priority
- AC-TASK-005-5: Position numbers update after reordering
- AC-TASK-005-6: First task's Move Up button is disabled
- AC-TASK-005-7: Last task's Move Down button is disabled

#### US-TASK-006: View Task Steps in Tree View
**As an** Operations Supervisor  
**I want to** view task steps in a hierarchical tree structure  
**So that** I can understand the task execution flow with sub-steps

**Acceptance Criteria:**
- AC-TASK-006-1: Tree view displays by default
- AC-TASK-006-2: Steps display with visual hierarchy
- AC-TASK-006-3: Completed steps show green checkmark
- AC-TASK-006-4: Executing steps show animated indicator
- AC-TASK-006-5: Pending steps show waiting indicator
- AC-TASK-006-6: Nested sub-steps display correctly
- AC-TASK-006-7: Each node shows time and description

### 4.3 Device Management

#### US-DEVICE-001: View Device List
**As a** Maintenance Technician  
**I want to** view a list of all devices  
**So that** I can monitor device status and health

**Acceptance Criteria:**
- AC-DEVICE-001-1: Device table displays with all required columns
- AC-DEVICE-001-2: Status badges display with correct colors
- AC-DEVICE-001-3: Battery levels display with visual indicator
- AC-DEVICE-001-4: Each row is clickable
- AC-DEVICE-001-5: Pagination controls are functional

#### US-DEVICE-002: View Device Details
**As a** Maintenance Technician  
**I want to** view detailed device information  
**So that** I can monitor device health and performance

**Acceptance Criteria:**
- AC-DEVICE-002-1: Basic info section displays device image and details
- AC-DEVICE-002-2: Real-time info displays connection, location, battery, and safety data
- AC-DEVICE-002-3: Real-time graphs display velocity and acceleration
- AC-DEVICE-002-4: Static specifications display physical and operational data
- AC-DEVICE-002-5: Statistics display odometry and performance metrics
- AC-DEVICE-002-6: Recent activity log displays correctly

#### US-DEVICE-003: Add New Device
**As a** System Administrator  
**I want to** register a new device  
**So that** it can be managed in the system

**Acceptance Criteria:**
- AC-DEVICE-003-1: Add Device modal opens on button click
- AC-DEVICE-003-2: Step 1 requires model selection and password
- AC-DEVICE-003-3: Step 2 requires device ID and name
- AC-DEVICE-003-4: Device appears in list after successful registration
- AC-DEVICE-003-5: Success message displays after registration

#### US-DEVICE-004: Delete Device
**As a** System Administrator  
**I want to** remove a device from the system  
**So that** decommissioned devices are not tracked

**Acceptance Criteria:**
- AC-DEVICE-004-1: Delete button displays confirmation dialog
- AC-DEVICE-004-2: Confirming deletion removes device from list
- AC-DEVICE-004-3: Success message displays after deletion
- AC-DEVICE-004-4: Canceling deletion preserves device

#### US-DEVICE-005: Monitor Real-time Device Metrics
**As a** Maintenance Technician  
**I want to** view real-time device performance graphs  
**So that** I can detect anomalies and performance issues

**Acceptance Criteria:**
- AC-DEVICE-005-1: Velocity chart displays with last 60 seconds of data
- AC-DEVICE-005-2: Acceleration chart displays with last 60 seconds of data
- AC-DEVICE-005-3: Charts update every second
- AC-DEVICE-005-4: Charts are responsive and maintain aspect ratio
- AC-DEVICE-005-5: Chart tooltips display on hover

### 4.4 Model Management

#### US-MODEL-001: View Model List
**As a** System Administrator  
**I want to** view all available robot and device models  
**So that** I can understand supported device types

**Acceptance Criteria:**
- AC-MODEL-001-1: Models display organized by base model category
- AC-MODEL-001-2: Each model card displays name, ID, description, and status
- AC-MODEL-001-3: Cards have hover effect
- AC-MODEL-001-4: View Details button is available on each card

#### US-MODEL-002: Add New Model
**As a** System Administrator  
**I want to** add a new robot or device model  
**So that** new device types can be supported

**Acceptance Criteria:**
- AC-MODEL-002-1: Add Model modal opens on button click
- AC-MODEL-002-2: All required fields are validated
- AC-MODEL-002-3: File upload accepts specified formats
- AC-MODEL-002-4: Model appears in list after successful addition
- AC-MODEL-002-5: Success message displays after addition

### 4.5 Multi-language Support

#### US-LANG-001: Switch Language
**As a** user  
**I want to** switch the interface language  
**So that** I can use the system in my preferred language

**Acceptance Criteria:**
- AC-LANG-001-1: Language dropdown displays on button click
- AC-LANG-001-2: Three language options are available (EN, ZH, JA)
- AC-LANG-001-3: Selecting a language immediately updates all UI text
- AC-LANG-001-4: Language selection persists during session
- AC-LANG-001-5: Dropdown closes after selection

#### US-LANG-002: View Translated Content
**As a** Japanese user  
**I want to** view all interface elements in Japanese  
**So that** I can understand and use the system effectively

**Acceptance Criteria:**
- AC-LANG-002-1: All navigation items display in Japanese
- AC-LANG-002-2: All page titles display in Japanese
- AC-LANG-002-3: All button labels display in Japanese
- AC-LANG-002-4: All table headers display in Japanese
- AC-LANG-002-5: All status badges display in Japanese
- AC-LANG-002-6: All form labels display in Japanese

---

## 5. UI/UX Requirements

### 5.1 Design System

#### 5.1.1 Color Palette

**Primary Colors:**
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Blue | #3498db | Buttons, active states, links |
| Dark Blue-Gray | #2c3e50 | Sidebar, headers |
| White | #ffffff | Backgrounds, cards |
| Light Gray | #f8f9fa | Section backgrounds |

**Status Colors:**
| Status | Hex Code | Usage |
|--------|----------|-------|
| Success/Online | #27ae60 | Completed, online status |
| Warning/Pending | #f39c12 | Pending, maintenance |
| Error/Offline | #e74c3c | Failed, offline, high priority |
| Info/Assigned | #3498db | Assigned, en route |
| Executing | #9b59b6 | Currently executing |
| Neutral | #95a5a6 | Low priority, cancelled |

**Text Colors:**
| Usage | Hex Code |
|-------|----------|
| Primary Text | #333333 |
| Secondary Text | #666666 |
| Light Text | #999999 |
| White Text | #ffffff |

#### 5.1.2 Typography

**Font Family:**
- Primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- Fallback: System default sans-serif

**Font Sizes:**
| Element | Size | Weight |
|---------|------|--------|
| Page Title (H2) | 20px | 600 |
| Section Title (H3) | 16-18px | 600 |
| Subsection Title (H4) | 14px | 600 |
| Body Text | 14px | 400 |
| Small Text | 12px | 400 |
| Button Text | 14px | 500 |
| Label Text | 12px | 600 |

**Line Height:** 1.6

#### 5.1.3 Spacing

**Standard Spacing:**
| Size | Pixels | Usage |
|------|--------|-------|
| xs | 4px | Tight spacing |
| sm | 8px | Small gaps |
| md | 12px | Medium gaps |
| lg | 16px | Large gaps |
| xl | 20px | Extra large gaps |
| xxl | 30px | Section spacing |

**Component Padding:**
| Component | Padding |
|-----------|---------|
| Buttons | 8px 16px |
| Input Fields | 8px 12px |
| Table Cells | 12px |
| Cards | 20px |
| Modal | 20px |

#### 5.1.4 Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 4px |
| Input Fields | 4px |
| Cards | 8px |
| Badges | 12px |
| Modals | 8px |
| Section Containers | 8px |

#### 5.1.5 Shadows

| Type | Shadow | Usage |
|------|--------|-------|
| Light | 0 2px 4px rgba(0,0,0,0.1) | Cards, sections |
| Medium | 0 4px 6px rgba(0,0,0,0.1) | Modals |
| Heavy | 0 4px 20px rgba(0,0,0,0.3) | Active modals |

### 5.2 Layout Specifications

#### 5.2.1 Page Layout

**Container:**
- Max width: 1400px
- Display: Flex
- Height: 100vh

**Sidebar:**
- Width: 250px
- Position: Fixed left
- Background: #2c3e50

**Main Content:**
- Flex: 1
- Display: Flex column
- Padding: 20px

**Header:**
- Height: Auto
- Padding: 15px 20px
- Background: #f8f9fa

**Footer:**
- Height: Auto
- Padding: 15px 20px
- Background: #f8f9fa

#### 5.2.2 Grid System

**Info Grid:**
- Display: Grid
- Columns: repeat(auto-fit, minmax(250px, 1fr))
- Gap: 15px

**Specs Grid:**
- Display: Grid
- Columns: repeat(auto-fit, minmax(300px, 1fr))
- Gap: 20px

**Model Grid:**
- Display: Grid
- Columns: repeat(auto-fill, minmax(300px, 1fr))
- Gap: 20px

#### 5.2.3 Responsive Breakpoints

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Desktop | > 768px | Full layout |
| Tablet | 768px | Sidebar collapsible, stacked grids |
| Mobile | < 768px | Single column, reduced padding |

### 5.3 Component Specifications

#### 5.3.1 Buttons

**Primary Button:**
- Background: #3498db
- Text: White
- Border: None
- Border-radius: 4px
- Padding: 8px 16px
- Hover: #2980b9
- Active: Transform translateY(-1px)

**Secondary Button:**
- Background: #95a5a6
- Text: White
- Hover: #7f8c8d

**View Details Button:**
- Background: #f8f9fa
- Text: #3498db
- Border: 1px solid #3498db
- Hover: Background #3498db, text white

**Delete Button:**
- Background: #f8f9fa
- Text: #e74c3c
- Border: 1px solid #e74c3c
- Hover: Background #e74c3c, text white

#### 5.3.2 Status Badges

**Badge Styling:**
- Padding: 4px 10px
- Border-radius: 12px
- Font-size: 12px
- Font-weight: 600
- Text-transform: Capitalize

**Color Coding:**
- Pending: Background #f39c12, text white
- Assigned: Background #3498db, text white
- En Route: Background #27ae60, text white
- Executing: Background #9b59b6, text white
- Completed: Background #27ae60, text white
- Failed: Background #e74c3c, text white
- Online: Background #27ae60, text white
- Offline: Background #e74c3c, text white

#### 5.3.3 Tables

**Table Styling:**
- Width: 100%
- Border-collapse: collapse
- Header background: #f8f9fa
- Row hover: #f8f9fa
- Cell padding: 12px
- Border-bottom: 1px solid #e0e0e0

**Sticky Header:**
- Position: sticky
- Top: 0
- Z-index: 10

#### 5.3.4 Progress Bars

**Progress Bar Styling:**
- Height: 8px
- Background: #e0e0e0
- Border-radius: 4px
- Fill color: #3498db
- Transition: width 0.5s ease

#### 5.3.5 Modals

**Modal Styling:**
- Position: Fixed, centered
- Background: rgba(0,0,0,0.5)
- Z-index: 1000
- Max-width: 400-500px
- Border-radius: 8px
- Box-shadow: 0 4px 20px rgba(0,0,0,0.3)

**Modal Sections:**
- Header: Padding 20px, border-bottom
- Body: Padding 20px
- Footer: Padding 20px, border-top

#### 5.3.6 Cards

**Card Styling:**
- Background: White
- Border-radius: 8px
- Box-shadow: 0 2px 4px rgba(0,0,0,0.1)
- Padding: 20px
- Hover: Transform translateY(-5px), enhanced shadow

### 5.4 Interaction Patterns

#### 5.4.1 Hover States

**Navigation Items:**
- Background: rgba(255,255,255,0.1)
- Margin-right: 0
- Transition: 0.3s

**Table Rows:**
- Background: #f0f8ff
- Cursor: pointer

**Buttons:**
- Transform: translateY(-1px)
- Enhanced shadow

**Cards:**
- Transform: translateY(-5px)
- Enhanced shadow

#### 5.4.2 Click States

**Buttons:**
- Transform: translateY(0)
- Immediate feedback

**Table Rows:**
- Navigate to details page

**Navigation Items:**
- Update active state
- Navigate to page

#### 5.4.3 Animations

**Robot Marker Pulse:**
```css
@keyframes pulse {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
  100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
}
```

**Executing Status Pulse:**
```css
@keyframes pulse {
  0% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(52, 152, 219, 0); }
  100% { box-shadow: 0 0 0 0 rgba(52, 152, 219, 0); }
}
```

**Transition Duration:**
- Standard: 0.3s
- Fast: 0.2s
- Slow: 0.5s

### 5.5 Accessibility Requirements

#### 5.5.1 Color Contrast

- All text shall meet WCAG 2.1 AA contrast ratio (4.5:1 for normal text, 3:1 for large text)
- Status badges shall have sufficient contrast
- Interactive elements shall be distinguishable

#### 5.5.2 Keyboard Navigation

- All interactive elements shall be keyboard accessible
- Tab order shall follow visual order
- Focus states shall be visible
- Enter key shall activate buttons and links

#### 5.5.3 Screen Reader Support

- All images shall have alt text
- Form inputs shall have associated labels
- Status changes shall be announced
- ARIA labels shall be used where appropriate

### 5.6 Responsive Design

#### 5.6.1 Mobile Adaptations

**Layout Changes:**
- Sidebar: Collapsible or hidden
- Grids: Single column
- Tables: Horizontal scroll or card view
- Buttons: Full width
- Padding: Reduced

**Touch Targets:**
- Minimum size: 44x44px
- Adequate spacing between targets

#### 5.6.2 Tablet Adaptations

**Layout Changes:**
- Sidebar: Collapsible
- Grids: 2 columns
- Tables: Horizontal scroll
- Reduced padding

---

## 6. Technical Requirements

### 6.1 Frontend Architecture

#### 6.1.1 Technology Stack

| Component | Technology | Version |
|-----------|------------|---------|
| Markup | HTML5 | - |
| Styling | CSS3 | - |
| Scripting | JavaScript (ES6+) | - |
| Charts | Chart.js | 4.4.0 |
| Fonts | System fonts | - |

#### 6.1.2 File Structure

```
Robot Management System/
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # CSS styling
└── PRD.md             # Product Requirements Document
```

#### 6.1.3 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest 2 versions |
| Firefox | Latest 2 versions |
| Safari | Latest 2 versions |
| Edge | Latest 2 versions |

### 6.2 Performance Requirements

#### 6.2.1 Page Load Time

| Metric | Target |
|--------|--------|
| Initial page load | < 2 seconds |
| Page navigation | < 500ms |
| Chart update | < 100ms |
| Search/filter response | < 300ms |

#### 6.2.2 Resource Optimization

- CSS: Minified, < 50KB
- JavaScript: Minified, < 100KB
- Images: Optimized, lazy loading
- Charts: Efficient rendering, data point limiting

#### 6.2.3 Memory Management

- Chart instances shall be properly destroyed when navigating away
- Event listeners shall be cleaned up
- Intervals shall be cleared when not needed

### 6.3 Data Management

#### 6.3.1 Data Structures

**Task Object:**
```javascript
{
  taskId: String,
  taskType: String,
  taskName: String,
  status: Enum ['pending', 'assigned', 'en-route', 'executing', 'completed', 'failed'],
  robot: String,
  workArea: String,
  eta: Time,
  priority: Enum ['high', 'normal', 'low'],
  startTime: DateTime,
  duration: String,
  progress: Number (0-100),
  steps: Array
}
```

**Device Object:**
```javascript
{
  id: String,
  name: String,
  type: Enum ['Robot', 'Elevator', 'Door'],
  model: String,
  brand: String,
  status: Enum ['online', 'offline', 'maintenance'],
  battery: Number (0-100) | null,
  location: String,
  ip: String,
  mac: String,
  realTime: Object,
  specs: Object,
  stats: Object
}
```

**Model Object:**
```javascript
{
  modelId: String,
  modelName: String,
  baseModel: String,
  description: String,
  status: Enum ['active', 'inactive']
}
```

#### 6.3.2 State Management

- Current language: Global variable
- Current page: CSS class toggling
- Chart instances: Global variables with cleanup
- Translation data: Static object

### 6.4 Internationalization (i18n)

#### 6.4.1 Translation Structure

```javascript
const translations = {
  en: { 'key': 'English text' },
  zh: { 'key': '中文文本' },
  ja: { 'key': '日本語テキスト' }
};
```

#### 6.4.2 Translation Keys

- Navigation items
- Page titles
- Button labels
- Table headers
- Status labels
- Form labels
- Error messages
- Success messages

#### 6.4.3 Language Switching

- Immediate UI update
- No page reload required
- All visible text updates
- Chart labels update

### 6.5 Security Requirements

#### 6.5.1 Input Validation

- All user inputs shall be validated
- SQL injection prevention (when backend implemented)
- XSS prevention
- File upload validation (type, size)

#### 6.5.2 Authentication

- Device registration requires password verification
- Session management (when backend implemented)
- Role-based access control (future enhancement)

#### 6.5.3 Data Protection

- Sensitive data encryption (when backend implemented)
- HTTPS enforcement (production)
- Secure API communication

### 6.6 API Requirements (Future Implementation)

#### 6.6.1 RESTful Endpoints

**Tasks:**
- GET /api/tasks - Retrieve task list
- GET /api/tasks/:id - Retrieve task details
- POST /api/tasks - Create new task
- PUT /api/tasks/:id - Update task
- DELETE /api/tasks/:id - Delete task
- PUT /api/queue/reorder - Reorder task queue

**Devices:**
- GET /api/devices - Retrieve device list
- GET /api/devices/:id - Retrieve device details
- POST /api/devices - Register new device
- PUT /api/devices/:id - Update device
- DELETE /api/devices/:id - Delete device
- GET /api/devices/:id/realtime - Get real-time data

**Models:**
- GET /api/models - Retrieve model list
- GET /api/models/:id - Retrieve model details
- POST /api/models - Create new model
- PUT /api/models/:id - Update model
- DELETE /api/models/:id - Delete model

#### 6.6.2 WebSocket (Real-time Updates)

- Task status updates
- Device location updates
- Real-time metrics streaming
- Queue position updates

### 6.7 Testing Requirements

#### 6.7.1 Unit Testing

- JavaScript functions
- Translation system
- Data transformations
- Validation logic

#### 6.7.2 Integration Testing

- Navigation flows
- Form submissions
- API interactions (when implemented)
- Real-time updates

#### 6.7.3 UI Testing

- Responsive design
- Cross-browser compatibility
- Accessibility compliance
- Visual regression

#### 6.7.4 Performance Testing

- Page load times
- Chart rendering performance
- Memory leaks
- Concurrent user handling

### 6.8 Deployment Requirements

#### 6.8.1 Development Environment

- Local development server
- Hot reload capability
- Debug mode enabled

#### 6.8.2 Production Environment

- Minified assets
- CDN for libraries
- HTTPS enabled
- Caching headers configured
- Error logging enabled

#### 6.8.3 CI/CD Pipeline

- Automated testing
- Build process
- Deployment automation
- Version control

### 6.9 Monitoring and Analytics

#### 6.9.1 Performance Monitoring

- Page load times
- API response times
- Error rates
- User interactions

#### 6.9.2 Usage Analytics

- Page views
- Feature usage
- Language preferences
- User flows

#### 6.9.3 Error Tracking

- JavaScript errors
- API failures
- User-reported issues
- System logs

---

## Appendix A: Glossary

| Term | Definition |
|------|------------|
| AMR | Autonomous Mobile Robot |
| ETA | Estimated Time of Arrival |
| Work Area | Designated operational zone for robots |
| Task Queue | Priority-ordered list of pending tasks |
| Base Model | Fundamental robot/device type category |
| Real-time Info | Live data from device sensors |
| Odometry | Measurement of distance traveled |
| E-Stop | Emergency Stop mechanism |

## Appendix B: Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | March 12, 2026 | PM | Initial PRD creation |

---

**Document End**
