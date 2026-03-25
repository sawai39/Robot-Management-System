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

**Navigation Structure:**

| Module | Sub-navigation |
|--------|----------------|
| **Apollo** | Site Monitoring (场域监控) |
| **Tasks (任务)** | Task List (任务列表), Task Queue (任务队列), Task Chain (任务链) |
| **RouteNet (路网)** | Map Edit (地图管理), RouteNet Edit (路网编辑) |
| **Devices (设备)** | Device List (设备列表), Device Model (设备模型) |
| **Event (事件)** | Exception/Alarm (异常报警) |
| **System (系统)** | Role-Permission (角色-权限), Role Management (角色管理), User-Role (人员-角色), User Management (用户管理) |

**Components:**
- **Apollo Module** (expandable submenu)
  - Site Monitoring (场域监控)
- **Tasks Module** (expandable submenu)
  - Task List (任务列表)
  - Task Queue (任务队列)
  - Task Chain (任务链)
- **RouteNet Module** (expandable submenu)
  - Map Edit (地图管理)
  - RouteNet Edit (路网编辑)
- **Devices Module** (expandable submenu)
  - Device List (设备列表)
  - Device Model (设备模型)
- **Event Module** (expandable submenu)
  - Exception/Alarm (异常报警)
- **System Module** (expandable submenu)
  - Role-Permission (角色-权限)
  - Role Management (角色管理)
  - User-Role (人员-角色)
  - User Management (用户管理)

**Functional Requirements:**
- FR-NAV-001: Sidebar shall display system title "Robot Management System"
- FR-NAV-002: Active navigation item shall be highlighted with blue background
- FR-NAV-003: All modules shall expand/collapse to show sub-navigation items
- FR-NAV-004: Navigation items shall change appearance on hover
- FR-NAV-005: Sidebar shall remain visible at all times (fixed position)
- FR-NAV-006: Navigation shall support bilingual labels (English and Chinese)

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
Expandable submenu for each module providing access to specific features.

**Functional Requirements:**
- FR-SUBNAV-001: Submenu shall expand on click
- FR-SUBNAV-002: Active sub-item shall be highlighted
- FR-SUBNAV-003: Submenu shall have darker background (#233140)
- FR-SUBNAV-004: Sub-items shall be indented to show hierarchy
- FR-SUBNAV-005: Only one submenu shall be expanded at a time (accordion behavior)

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

### 3.6 Event Management

#### 3.6.1 Exception/Alarm Overview

**Description:**
The Exception/Alarm module provides comprehensive monitoring and management of device errors and task errors throughout the robot management system. This module enables real-time error detection, classification, notification, tracking, and resolution workflow management to ensure system reliability and minimize operational downtime.

**Purpose:**
- Detect and monitor device errors in real-time (robot malfunctions, sensor failures, communication issues, etc.)
- Track task execution errors (navigation failures, task aborts, timeout errors, etc.)
- Provide immediate alerts and notifications to relevant personnel
- Maintain comprehensive error history and analytics
- Streamline error resolution workflow with assignment and tracking
- Generate error reports for analysis and improvement

**Scope:**
- Device error monitoring for all registered robots, elevators, and doors
- Task error tracking across all task types and execution stages
- Real-time error detection and alerting
- Error classification by severity and type
- Multi-channel notification system (in-app, email, SMS)
- Error history and trend analysis
- Error resolution workflow with assignment and status tracking
- Error reporting and export capabilities

#### 3.6.2 Error Classification and Severity Levels

**Error Types:**

**Device Errors:**
| Error Type | Description | Examples |
|------------|-------------|----------|
| Communication | Device connectivity issues | Connection lost, timeout, signal weak |
| Sensor Failure | Sensor malfunction or data errors | Lidar failure, camera error, sensor timeout |
| Power/Battery | Power-related issues | Low battery, charging failure, battery overheating |
| Movement | Navigation and motion issues | Stuck, collision detected, path planning failure |
| Hardware | Physical hardware problems | Motor failure, wheel malfunction, door jam |
| System | Software/system errors | System crash, memory overflow, CPU overload |
| Safety | Safety-related issues | E-stop activated, obstacle detection failure |

**Task Errors:**
| Error Type | Description | Examples |
|------------|-------------|----------|
| Navigation | Path planning and execution failures | Path blocked, unreachable destination, localization failure |
| Execution | Task execution problems | Action failed, timeout, resource unavailable |
| Resource | Resource allocation issues | Robot unavailable, device busy, capacity exceeded |
| Priority | Priority and scheduling conflicts | Task conflict, queue overflow, priority violation |
| Validation | Task validation errors | Invalid parameters, missing data, constraint violation |
| Timeout | Time-related failures | Task timeout, step timeout, response timeout |

**Severity Levels:**

| Level | Description | Color | Response Time |
|-------|-------------|-------|---------------|
| Critical | System-critical errors requiring immediate attention | Red (#e74c3c) | < 5 minutes |
| High | Major errors affecting operations | Orange (#e67e22) | < 30 minutes |
| Medium | Moderate errors with partial impact | Yellow (#f39c12) | < 2 hours |
| Low | Minor errors with minimal impact | Blue (#3498db) | < 24 hours |
| Info | Informational errors for awareness | Gray (#95a5a6) | No immediate action |

#### 3.6.3 Exception/Alarm List

**Description:**
Comprehensive list view of all device and task errors with advanced filtering, search, and real-time updates.

**Functional Requirements:**

**Dashboard Statistics:**
- FR-EA-001: System shall display error statistics cards:
  - Active Errors count (errors requiring resolution)
  - Critical Errors count (severity: critical)
  - Today's Errors count
  - Resolved Today count
- FR-EA-002: Statistics shall update in real-time
- FR-EA-003: Critical errors shall be highlighted with pulsing animation

**Search and Filter:**
- FR-EA-004: System shall provide search input for error ID, description, or device/task search
- FR-EA-005: System shall provide error type filter: All Types, Device Errors, Task Errors
- FR-EA-006: System shall provide severity filter: All Severities, Critical, High, Medium, Low, Info
- FR-EA-007: System shall provide status filter: All Statuses, Active, Resolved, Ignored, In Progress
- FR-EA-008: System shall provide time range filter: All Time, Last Hour, Last 24 Hours, Last 7 Days, Last 30 Days
- FR-EA-009: System shall provide device filter: All Devices, [device list]
- FR-EA-010: System shall provide assignee filter: All Assignees, Unassigned, [user list]

**Error Table:**
- FR-EA-011: Table shall display columns: Error ID, Error Type, Severity, Status, Device/Task, Description, Occurred Time, Assignee, Actions
- FR-EA-012: Severity badges shall display with color coding and icon
- FR-EA-013: Status badges shall display with color coding:
  - Active: Red (#e74c3c)
  - In Progress: Orange (#f39c12)
  - Resolved: Green (#27ae60)
  - Ignored: Gray (#95a5a6)
- FR-EA-014: Critical and high severity errors shall be highlighted with colored background
- FR-EA-015: Each row shall be clickable to view error details
- FR-EA-016: Real-time updates shall be indicated with visual indicator
- FR-EA-017: Actions column shall include: View Details, Assign, Resolve, Ignore

**Pagination:**
- FR-EA-018: System shall display pagination controls
- FR-EA-019: Active page shall be highlighted
- FR-EA-020: Page size selector shall be available (10, 25, 50, 100)

**Action Buttons:**
- FR-EA-021: "Refresh" button shall reload error list
- FR-EA-022: "Export" button shall export filtered errors to CSV/Excel
- FR-EA-023: "Mark All Resolved" button shall be available for filtered results
- FR-EA-024: "Bulk Assign" button shall assign multiple errors to a user

**Real-time Updates:**
- FR-EA-025: New errors shall appear automatically without page refresh
- FR-EA-026: Error status changes shall update in real-time
- FR-EA-027: Sound notification shall play for critical errors (optional)
- FR-EA-028: Visual notification shall appear for new errors

**Error Data Structure:**
```javascript
{
  errorId: String,
  errorType: Enum ['device', 'task'],
  errorCategory: String,
  severity: Enum ['critical', 'high', 'medium', 'low', 'info'],
  status: Enum ['active', 'in_progress', 'resolved', 'ignored'],
  sourceType: Enum ['robot', 'elevator', 'door', 'task'],
  sourceId: String,
  sourceName: String,
  description: String,
  details: Object,
  occurredTime: DateTime,
  resolvedTime: DateTime | null,
  assignee: String | null,
  assigneeId: String | null,
  assignedTime: DateTime | null,
  resolutionNotes: String | null,
  occurrenceCount: Number,
  relatedErrors: Array<String>
}
```

#### 3.6.4 Error Details

**Description:**
Detailed view of a single error with comprehensive information, history, and resolution workflow.

**Functional Requirements:**

**Navigation:**
- FR-ED-001: "Back to Error List" button shall return to error list
- FR-ED-002: Error details shall load when clicking on error row or "View Details" button

**Error Information Section:**
- FR-ED-003: System shall display error information in a grid layout:
  - Error ID
  - Error Type (Device/Task)
  - Error Category
  - Severity (with badge and icon)
  - Status (with badge)
  - Source Type
  - Source Name/ID
  - Occurred Time
  - Duration (if resolved)
- FR-ED-004: Severity shall be visually emphasized with color and icon
- FR-ED-005: Critical errors shall have warning banner

**Error Description Section:**
- FR-ED-006: System shall display detailed error description
- FR-ED-007: System shall display error details object with relevant data:
  - For device errors: sensor data, error codes, device state
  - For task errors: task ID, step information, failure point
- FR-ED-008: System shall display error context information:
  - Location (if applicable)
  - Related task or device
  - Environmental conditions (if available)

**Error History Section:**
- FR-ED-009: System shall display occurrence history timeline
- FR-ED-010: Timeline shall show:
  - First occurrence time
  - All subsequent occurrences
  - Occurrence count
  - Time between occurrences
- FR-ED-011: System shall display related errors list
- FR-ED-012: System shall display error patterns and trends

**Resolution Workflow Section:**
- FR-ED-013: System shall display current assignee with avatar
- FR-ED-014: System shall display assignment time
- FR-ED-015: "Reassign" button shall open user selection modal
- FR-ED-016: "Resolve" button shall open resolution form
- FR-ED-017: "Ignore" button shall mark error as ignored (with confirmation)
- FR-ED-018: Resolution form shall include:
  - Resolution notes (required)
  - Resolution method dropdown
  - Follow-up actions checkbox
  - Preventive measures notes
- FR-ED-019: System shall display resolution history if previously resolved

**Activity Log Section:**
- FR-ED-020: System shall display activity log table
- FR-ED-021: Table shall include columns: Time, Action, User, Details
- FR-ED-022: Activities shall include: Error Created, Assigned, Reassigned, Status Changed, Resolved, Ignored, Comment Added

**Related Information Section:**
- FR-ED-023: For device errors: link to device details page
- FR-ED-024: For task errors: link to task details page
- FR-ED-025: System shall display similar errors for reference

**Action Buttons:**
- FR-ED-026: "View Device/Task" button shall navigate to related entity
- FR-ED-027: "Create Task" button shall create maintenance task for device errors
- FR-ED-028: "Add Comment" button shall add notes to error
- FR-ED-029: "Export" button shall export error details to PDF

#### 3.6.5 Error Notification System

**Description:**
Multi-channel notification system for alerting relevant personnel about errors based on severity and configuration.

**Functional Requirements:**

**Notification Channels:**
- FR-EN-001: System shall support in-app notifications
- FR-EN-002: System shall support email notifications
- FR-EN-003: System shall support SMS notifications (optional)
- FR-EN-004: System shall support push notifications (optional)

**Notification Rules:**
- FR-EN-005: System shall provide notification rule configuration
- FR-EN-006: Rules shall be based on:
  - Error severity level
  - Error type/category
  - Device type
  - Work area
  - Time of day
- FR-EN-007: System shall allow multiple notification channels per rule
- FR-EN-008: System shall allow notification recipient assignment per rule

**In-App Notifications:**
- FR-EN-009: System shall display notification bell icon in header
- FR-EN-010: Notification count badge shall show unread count
- FR-EN-011: Clicking bell shall open notification dropdown
- FR-EN-012: Notifications shall display with:
  - Error severity icon
  - Error description
  - Time ago
  - Action button (View Details)
- FR-EN-013: Critical errors shall display as persistent banner
- FR-EN-014: Notifications shall be marked as read on click

**Email Notifications:**
- FR-EN-015: System shall send email notifications based on rules
- FR-EN-016: Email shall include:
  - Error summary
  - Error details
  - Severity level
  - Source information
  - Action link to error details
- FR-EN-017: Critical errors shall trigger immediate email
- FR-EN-018: Non-critical errors may be batched (configurable)

**SMS Notifications:**
- FR-EN-019: System shall send SMS for critical errors only
- FR-EN-020: SMS shall include brief error summary and action link
- FR-EN-021: SMS rate limiting shall be applied (max 1 per 5 minutes per user)

**Notification Preferences:**
- FR-EN-022: Users shall configure notification preferences
- FR-EN-023: Preferences shall include:
  - Enabled notification channels
  - Severity thresholds
  - Quiet hours
  - Device/work area filters
- FR-EN-024: System shall respect user preferences

**Notification History:**
- FR-EN-025: System shall maintain notification history
- FR-EN-026: History shall show: sent time, channel, recipient, status
- FR-EN-027: Failed notifications shall be logged and retried

#### 3.6.6 Error Analytics and Reporting

**Description:**
Comprehensive analytics and reporting capabilities for error analysis, trend identification, and performance improvement.

**Functional Requirements:**

**Analytics Dashboard:**
- FR-EA-101: System shall display error analytics dashboard
- FR-EA-102: Dashboard shall include:
  - Error trend chart (errors over time)
  - Error distribution by severity (pie chart)
  - Error distribution by type (bar chart)
  - Error distribution by device (bar chart)
  - Top 10 most frequent errors
  - Average resolution time by severity
  - Error rate by work area

**Time Range Selection:**
- FR-EA-103: System shall provide time range selector: Last 24 Hours, Last 7 Days, Last 30 Days, Last 90 Days, Custom Range
- FR-EA-104: Charts shall update based on selected time range

**Error Trend Analysis:**
- FR-EA-105: System shall display error trend line chart
- FR-EA-106: Chart shall show total errors by day/hour
- FR-EA-107: Chart shall overlay resolved errors
- FR-EA-108: Chart shall show trend line for prediction

**Error Distribution Analysis:**
- FR-EA-109: System shall display error distribution by severity
- FR-EA-110: System shall display error distribution by error type
- FR-EA-111: System shall display error distribution by device type
- FR-EA-112: Charts shall be interactive with drill-down capability

**Performance Metrics:**
- FR-EA-113: System shall display key metrics:
  - Total errors in period
  - Active errors
  - Resolved errors
  - Average resolution time
  - Resolution rate
  - Recurrence rate
  - Critical error response time

**Top Errors Analysis:**
- FR-EA-114: System shall display top 10 most frequent errors
- FR-EA-115: Each error shall show:
  - Error category
  - Occurrence count
  - Percentage of total
  - Average resolution time
  - Trend (increasing/decreasing)

**Error Reports:**
- FR-EA-116: System shall provide report generation
- FR-EA-117: Report types shall include:
  - Daily error summary
  - Weekly error report
  - Monthly error analysis
  - Custom date range report
- FR-EA-118: Reports shall include:
  - Executive summary
  - Error statistics
  - Top errors analysis
  - Trends and patterns
  - Recommendations
- FR-EA-119: Reports shall be exportable to PDF and Excel
- FR-EA-120: Reports shall be schedulable for automatic delivery

**Export Capabilities:**
- FR-EA-121: System shall export error data to CSV
- FR-EA-122: System shall export error data to Excel
- FR-EA-123: System shall export error data to JSON
- FR-EA-124: Export shall respect current filters
- FR-EA-125: Export shall include all error details

#### 3.6.7 Error Resolution Workflow

**Description:**
Structured workflow for assigning, tracking, and resolving errors with accountability and documentation.

**Functional Requirements:**

**Error Assignment:**
- FR-ER-001: System shall allow manual error assignment
- FR-ER-002: System shall support automatic assignment based on rules
- FR-ER-003: Assignment rules shall consider:
  - Error type
  - Device type
  - Work area
  - User availability
  - User expertise
- FR-ER-004: System shall notify assignee upon assignment
- FR-ER-005: Assignment history shall be tracked

**Error Status Workflow:**
- FR-ER-006: System shall support error status transitions:
  - Active → In Progress (when assigned or work started)
  - In Progress → Resolved (when issue fixed)
  - In Progress → Active (if issue persists)
  - Active → Ignored (if not actionable)
  - Resolved → Active (if error recurs)
- FR-ER-007: Status changes shall require notes
- FR-ER-008: Status changes shall be logged

**Resolution Process:**
- FR-ER-009: System shall require resolution notes
- FR-ER-010: Resolution notes shall include:
  - Root cause analysis
  - Resolution method
  - Preventive measures
  - Follow-up actions
- FR-ER-011: System shall allow attachment of supporting documents
- FR-ER-012: System shall link resolution to related tasks

**Escalation Rules:**
- FR-ER-013: System shall support automatic escalation
- FR-ER-014: Escalation shall trigger based on:
  - Time since occurrence
  - Severity level
  - Resolution time exceeded
  - Recurrence count
- FR-ER-015: Escalation shall notify higher-level personnel
- FR-ER-016: Escalation history shall be tracked

**Collaboration Features:**
- FR-ER-017: System shall allow comments on errors
- FR-ER-018: Comments shall support @mentions
- FR-ER-019: Comments shall notify mentioned users
- FR-ER-020: System shall allow error tagging
- FR-ER-021: Tags shall include: urgent, recurring, investigation needed, etc.

**Resolution Templates:**
- FR-ER-022: System shall provide resolution templates
- FR-ER-023: Templates shall be customizable by error type
- FR-ER-024: Templates shall include common resolution steps
- FR-ER-025: Templates shall improve consistency

**Follow-up Tasks:**
- FR-ER-026: System shall allow creation of follow-up tasks
- FR-ER-027: Follow-up tasks shall be linked to error
- FR-ER-028: Follow-up tasks shall include:
  - Maintenance tasks
  - Investigation tasks
  - Process improvement tasks

---

### 3.7 Multi-language Support

#### 3.5.1 Language Switcher

**Description:**  
Global language selection control for switching between supported languages.

**Functional Requirements:**

**Language Options:**
- FR-MLANG-001: System shall support two languages:
  - English (en)
  - Chinese (zh) - Default
- FR-MLANG-002: Language button shall display globe icon
- FR-MLANG-003: Dropdown shall appear on click
- FR-MLANG-004: Dropdown shall close when clicking outside
- FR-MLANG-005: Selected language shall apply immediately

**Translation Scope:**
- FR-MLANG-006: All UI text shall be translatable:
  - System name
  - Navigation items
  - Page titles and descriptions
  - Button labels
  - Table headers
  - Status badges
  - Form labels
  - Error messages
  - Footer text

**Language Persistence:**
- FR-MLANG-007: Selected language shall persist during session
- FR-MLANG-008: Default language shall be Chinese (zh)

#### 3.5.2 Translation Specifications

**System Name:**
| English | Chinese |
|---------|---------|
| Robot Management System | 机器人调度系统 |

**Navigation Translations:**
| English | Chinese |
|---------|---------|
| Apollo | Apollo |
| Site Monitoring | 场域监控 |
| Tasks | 任务 |
| Task List | 任务列表 |
| Task Queue | 任务队列 |
| Task Chain | 任务链 |
| RouteNet | 路网 |
| Map Edit | 地图管理 |
| RouteNet Edit | 路网编辑 |
| Devices | 设备 |
| Device List | 设备列表 |
| Device Model | 设备模型 |
| Event | 事件 |
| Exception/Alarm | 异常报警 |
| System | 系统 |
| Role-Permission | 角色-权限 |
| Role Management | 角色管理 |
| User-Role | 人员-角色 |
| User Management | 用户管理 |

**Dashboard Translations:**
| English | Chinese |
|---------|---------|
| Total Robots | 机器人总数 |
| Active Tasks | 活动任务 |
| Online Devices | 在线设备 |
| Completed Today | 今日完成 |
| Quick Actions | 快捷操作 |
| Recent Activity | 最近活动 |
| new this week | 本周新增 |
| executing now | 正在执行 |
| online rate | 在线率 |
| increase | 增长 |

**Task List Page Translations:**

*Buttons:*
| English | Chinese |
|---------|---------|
| Add New Task | 新建任务 |
| Refresh | 刷新 |
| Search | 搜索 |
| View Details | 查看详情 |
| Delete | 删除 |

*Search & Filter Area:*
| English | Chinese |
|---------|---------|
| Search tasks... | 搜索任务... |
| All Statuses | 所有状态 |
| All Robots | 所有机器人 |
| Pending | 待处理 |
| Assigned | 已分配 |
| En Route | 在途中 |
| Executing | 执行中 |
| Completed | 已完成 |
| Failed | 失败 |

*Table Headers:*
| English | Chinese |
|---------|---------|
| Task ID | 任务ID |
| Task Type | 任务类型 |
| Task Name | 任务名称 |
| Status | 状态 |
| Robot | 机器人 |
| Work Area | 工作区域 |
| ETA | 预计到达 |
| Priority | 优先级 |
| Actions | 操作 |

*Priority Labels:*
| English | Chinese |
|---------|---------|
| High | 高 |
| Normal | 普通 |
| Low | 低 |

**Task Queue Page Translations:**

*Statistics Cards:*
| English | Chinese |
|---------|---------|
| Pending Tasks | 待处理任务 |
| In Progress | 进行中 |
| Completed Today | 今日完成 |

*Buttons:*
| English | Chinese |
|---------|---------|
| Add to Queue | 添加到队列 |
| Remove | 移除 |
| Move Up | 上移 |
| Move Down | 下移 |

*Search & Filter Area:*
| English | Chinese |
|---------|---------|
| All Priorities | 所有优先级 |
| All Work Areas | 所有工作区域 |

*Table Headers:*
| English | Chinese |
|---------|---------|
| Queue Position | 队列位置 |
| Created | 创建时间 |
| Assigned Robot | 分配机器人 |

**Device List Page Translations:**

*Buttons:*
| English | Chinese |
|---------|---------|
| Add New Device | 新建设备 |
| Edit | 编辑 |

*Search & Filter Area:*
| English | Chinese |
|---------|---------|
| Search devices... | 搜索设备... |
| All Types | 所有类型 |
| Robots | 机器人 |
| Elevators | 电梯 |
| Doors | 门 |
| Online | 在线 |
| Offline | 离线 |
| Maintenance | 维护中 |

*Table Headers:*
| English | Chinese |
|---------|---------|
| Device ID | 设备ID |
| Device Name | 设备名称 |
| Model | 型号 |
| Brand | 品牌 |
| Battery | 电量 |
| Current Task | 当前任务 |
| Location | 位置 |

**Device Model Page Translations:**

*Buttons:*
| English | Chinese |
|---------|---------|
| Add New Model | 新建模型 |
| Save Model | 保存模型 |

*Model Card:*
| English | Chinese |
|---------|---------|
| Model Name | 模型名称 |
| Model ID | 模型ID |
| Base Model | 基础模型 |
| Description | 描述 |
| Active | 激活 |
| Inactive | 未激活 |

**Modal Translations:**

*Add Device Modal:*
| English | Chinese |
|---------|---------|
| Add New Device | 添加新设备 |
| Select Model | 选择型号 |
| Connection Password | 连接密码 |
| Enter the password provided with the device | 输入设备提供的密码 |
| Verify | 验证 |
| Device ID | 设备ID |
| Device Name | 设备名称 |
| Add | 添加 |
| Cancel | 取消 |

*Add Model Modal:*
| English | Chinese |
|---------|---------|
| Add New Model | 添加新模型 |
| Model Name | 模型名称 |
| Base Model | 基础模型 |
| Model Description | 模型描述 |
| Upload Model Description File | 上传模型描述文件 |
| Save | 保存 |

**Common Button Translations:**
| English | Chinese |
|---------|---------|
| Save | 保存 |
| Cancel | 取消 |
| Confirm | 确认 |
| Close | 关闭 |
| Verify | 验证 |
| Add | 添加 |
| Search | 搜索 |
| Reset | 重置 |
| Submit | 提交 |

**Event/Exception Page Translations:**

*Statistics Cards:*
| English | Chinese |
|---------|---------|
| Active Errors | 活动错误 |
| Critical Errors | 严重错误 |
| Today's Errors | 今日错误 |
| Resolved Today | 今日已解决 |

*Buttons:*
| English | Chinese |
|---------|---------|
| Refresh | 刷新 |
| Export | 导出 |
| Mark All Resolved | 标记全部已解决 |
| Bulk Assign | 批量分配 |
| View Details | 查看详情 |
| Assign | 分配 |
| Resolve | 解决 |
| Ignore | 忽略 |
| Reassign | 重新分配 |
| Create Task | 创建任务 |
| Add Comment | 添加评论 |

*Search & Filter Area:*
| English | Chinese |
|---------|---------|
| Search errors... | 搜索错误... |
| All Types | 所有类型 |
| Device Errors | 设备错误 |
| Task Errors | 任务错误 |
| All Severities | 所有严重级别 |
| Critical | 严重 |
| High | 高 |
| Medium | 中 |
| Low | 低 |
| Info | 信息 |
| All Statuses | 所有状态 |
| Active | 活动 |
| In Progress | 进行中 |
| Resolved | 已解决 |
| Ignored | 已忽略 |
| All Time | 全部时间 |
| Last Hour | 最近1小时 |
| Last 24 Hours | 最近24小时 |
| Last 7 Days | 最近7天 |
| Last 30 Days | 最近30天 |
| All Devices | 所有设备 |
| All Assignees | 所有负责人 |
| Unassigned | 未分配 |

*Table Headers:*
| English | Chinese |
|---------|---------|
| Error ID | 错误ID |
| Error Type | 错误类型 |
| Severity | 严重级别 |
| Status | 状态 |
| Device/Task | 设备/任务 |
| Description | 描述 |
| Occurred Time | 发生时间 |
| Assignee | 负责人 |

*Error Type Labels:*
| English | Chinese |
|---------|---------|
| Device | 设备 |
| Task | 任务 |

*Error Categories:*
| English | Chinese |
|---------|---------|
| Communication | 通信 |
| Sensor Failure | 传感器故障 |
| Power/Battery | 电源/电池 |
| Movement | 运动 |
| Hardware | 硬件 |
| System | 系统 |
| Safety | 安全 |
| Navigation | 导航 |
| Execution | 执行 |
| Resource | 资源 |
| Priority | 优先级 |
| Validation | 验证 |
| Timeout | 超时 |

*Notification Translations:*
| English | Chinese |
|---------|---------|
| Notifications | 通知 |
| Mark as Read | 标记为已读 |
| Notification Preferences | 通知偏好 |
| Notification Rules | 通知规则 |
| Configure Rules | 配置规则 |
| Quiet Hours | 静音时段 |

*Analytics Translations:*
| English | Chinese |
|---------|---------|
| Error Analytics | 错误分析 |
| Error Trend | 错误趋势 |
| Error Distribution | 错误分布 |
| Top Errors | 热门错误 |
| Performance Metrics | 性能指标 |
| Generate Report | 生成报告 |
| Daily Summary | 每日摘要 |
| Weekly Report | 每周报告 |
| Monthly Analysis | 每月分析 |

*Resolution Translations:*
| English | Chinese |
|---------|---------|
| Resolution Notes | 解决说明 |
| Resolution Method | 解决方法 |
| Preventive Measures | 预防措施 |
| Follow-up Actions | 后续行动 |
| Root Cause Analysis | 根本原因分析 |

**Footer Translations:**
| English | Chinese |
|---------|---------|
| Version | 版本 |

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

### 4.6 Event Management

#### US-EVENT-001: View Exception/Alarm List
**As a** Maintenance Technician  
**I want to** view a list of all device and task errors  
**So that** I can monitor system health and identify issues requiring attention

**Acceptance Criteria:**
- AC-EVENT-001-1: Error table displays with all required columns
- AC-EVENT-001-2: Severity badges display with correct colors and icons
- AC-EVENT-001-3: Status badges display with correct colors
- AC-EVENT-001-4: Dashboard statistics display correctly
- AC-EVENT-001-5: Critical errors are highlighted
- AC-EVENT-001-6: Real-time updates appear automatically
- AC-EVENT-001-7: Each row is clickable

#### US-EVENT-002: Search and Filter Errors
**As a** Fleet Manager  
**I want to** search and filter errors  
**So that** I can quickly find specific errors or focus on critical issues

**Acceptance Criteria:**
- AC-EVENT-002-1: Search input accepts text input for error ID, description, or device/task
- AC-EVENT-002-2: Error type filter applies immediately on selection
- AC-EVENT-002-3: Severity filter applies immediately on selection
- AC-EVENT-002-4: Status filter applies immediately on selection
- AC-EVENT-002-5: Time range filter applies immediately on selection
- AC-EVENT-002-6: Multiple filters can be combined
- AC-EVENT-002-7: Device filter shows available devices
- AC-EVENT-002-8: Assignee filter shows available users

#### US-EVENT-003: View Error Details
**As a** Maintenance Technician  
**I want to** view detailed information about an error  
**So that** I can understand the issue and determine the appropriate resolution

**Acceptance Criteria:**
- AC-EVENT-003-1: Clicking error row opens details page
- AC-EVENT-003-2: Error information grid displays all fields
- AC-EVENT-003-3: Severity is visually emphasized with color and icon
- AC-EVENT-003-4: Error description displays with full details
- AC-EVENT-003-5: Error history timeline displays correctly
- AC-EVENT-003-6: Activity log shows all actions
- AC-EVENT-003-7: Related errors are displayed
- AC-EVENT-003-8: Links to related device/task are available

#### US-EVENT-004: Assign Error to User
**As a** Fleet Manager  
**I want to** assign errors to specific users  
**So that** accountability is established and resolution is tracked

**Acceptance Criteria:**
- AC-EVENT-004-1: Assign button opens user selection modal
- AC-EVENT-004-2: User selection modal displays available users
- AC-EVENT-004-3: Assignee is updated after selection
- AC-EVENT-004-4: Assignment time is recorded
- AC-EVENT-004-5: Assignee receives notification
- AC-EVENT-004-6: Assignment history is logged
- AC-EVENT-004-7: Bulk assign works for multiple errors

#### US-EVENT-005: Resolve Error
**As a** Maintenance Technician  
**I want to** mark an error as resolved  
**So that** the error is tracked as fixed and system health is updated

**Acceptance Criteria:**
- AC-EVENT-005-1: Resolve button opens resolution form
- AC-EVENT-005-2: Resolution form requires notes
- AC-EVENT-005-3: Resolution form includes resolution method dropdown
- AC-EVENT-005-4: Resolution form includes preventive measures field
- AC-EVENT-005-5: Error status changes to Resolved
- AC-EVENT-005-6: Resolution time is recorded
- AC-EVENT-007-7: Resolution notes are saved
- AC-EVENT-005-8: Activity log records resolution

#### US-EVENT-006: Configure Error Notifications
**As a** System Administrator  
**I want to** configure notification rules for errors  
**So that** relevant personnel are alerted appropriately

**Acceptance Criteria:**
- AC-EVENT-006-1: Notification rules can be created
- AC-EVENT-006-2: Rules can be based on severity level
- AC-EVENT-006-3: Rules can be based on error type
- AC-EVENT-006-4: Rules can be based on device type
- AC-EVENT-006-5: Multiple notification channels can be selected
- AC-EVENT-006-6: Recipients can be assigned per rule
- AC-EVENT-006-7: Rules can be edited and deleted
- AC-EVENT-006-8: Rules are applied immediately

#### US-EVENT-007: Receive Error Notifications
**As a** Maintenance Technician  
**I want to** receive notifications about errors  
**So that** I can respond quickly to issues

**Acceptance Criteria:**
- AC-EVENT-007-1: In-app notifications display in header
- AC-EVENT-007-2: Notification badge shows unread count
- AC-EVENT-007-3: Clicking bell opens notification dropdown
- AC-EVENT-007-4: Notifications display severity icon and description
- AC-EVENT-007-5: Critical errors display as persistent banner
- AC-EVENT-007-6: Email notifications are sent based on rules
- AC-EVENT-007-7: SMS notifications are sent for critical errors
- AC-EVENT-007-8: Notifications are marked as read on click

#### US-EVENT-008: View Error Analytics
**As a** Fleet Manager  
**I want to** view error analytics and trends  
**So that** I can identify patterns and improve system reliability

**Acceptance Criteria:**
- AC-EVENT-008-1: Analytics dashboard displays with all charts
- AC-EVENT-008-2: Error trend chart shows errors over time
- AC-EVENT-008-3: Error distribution by severity displays correctly
- AC-EVENT-008-4: Error distribution by type displays correctly
- AC-EVENT-008-5: Top 10 most frequent errors are listed
- AC-EVENT-008-6: Performance metrics display correctly
- AC-EVENT-008-7: Time range selector updates all charts
- AC-EVENT-008-8: Charts are interactive with drill-down

#### US-EVENT-009: Generate Error Reports
**As a** Fleet Manager  
**I want to** generate error reports  
**So that** I can share analysis with stakeholders

**Acceptance Criteria:**
- AC-EVENT-009-1: Report generation modal opens
- AC-EVENT-009-2: Report types are available (daily, weekly, monthly, custom)
- AC-EVENT-009-3: Date range can be selected
- AC-EVENT-009-4: Report includes executive summary
- AC-EVENT-009-5: Report includes error statistics
- AC-EVENT-009-6: Report includes top errors analysis
- AC-EVENT-009-7: Report includes trends and patterns
- AC-EVENT-009-8: Report can be exported to PDF
- AC-EVENT-009-9: Report can be exported to Excel
- AC-EVENT-010-10: Reports can be scheduled for automatic delivery

#### US-EVENT-010: Export Error Data
**As a** System Administrator  
**I want to** export error data  
**So that** I can perform offline analysis or archive records

**Acceptance Criteria:**
- AC-EVENT-010-1: Export button is available
- AC-EVENT-010-2: Export formats include CSV, Excel, JSON
- AC-EVENT-010-3: Export respects current filters
- AC-EVENT-010-4: Export includes all error details
- AC-EVENT-010-5: Export file downloads successfully
- AC-EVENT-010-6: Exported data is accurate and complete

#### US-EVENT-011: Configure Notification Preferences
**As a** user  
**I want to** configure my notification preferences  
**So that** I receive notifications that are relevant to me

**Acceptance Criteria:**
- AC-EVENT-011-1: Notification preferences modal opens
- AC-EVENT-011-2: Notification channels can be enabled/disabled
- AC-EVENT-011-3: Severity thresholds can be set
- AC-EVENT-011-4: Quiet hours can be configured
- AC-EVENT-011-5: Device/work area filters can be applied
- AC-EVENT-011-6: Preferences are saved immediately
- AC-EVENT-011-7: System respects user preferences

#### US-EVENT-012: Track Error Resolution Progress
**As a** Fleet Manager  
**I want to** track error resolution progress  
**So that** I can ensure issues are being addressed

**Acceptance Criteria:**
- AC-EVENT-012-1: Error list shows assignee for each error
- AC-EVENT-012-2: Error list shows status for each error
- AC-EVENT-012-3: Error details show assignment time
- AC-EVENT-012-4: Error details show resolution time
- AC-EVENT-012-5: Activity log shows all status changes
- AC-EVENT-012-6: Average resolution time is calculated
- AC-EVENT-012-7: Resolution rate is displayed

#### US-EVENT-013: Add Comments to Error
**As a** Maintenance Technician  
**I want to** add comments to errors  
**So that** I can collaborate with team members on resolution

**Acceptance Criteria:**
- AC-EVENT-013-1: Add Comment button opens comment form
- AC-EVENT-013-2: Comment form accepts text input
- AC-EVENT-013-3: Comments support @mentions
- AC-EVENT-013-4: Mentioned users receive notification
- AC-EVENT-013-5: Comments display in activity log
- AC-EVENT-013-6: Comments show author and timestamp

#### US-EVENT-014: Create Follow-up Tasks
**As a** Maintenance Technician  
**I want to** create follow-up tasks for errors  
**So that** preventive actions can be tracked

**Acceptance Criteria:**
- AC-EVENT-014-1: Create Task button opens task creation form
- AC-EVENT-014-2: Task is linked to error
- AC-EVENT-014-3: Task type can be selected (maintenance, investigation, improvement)
- AC-EVENT-014-4: Task appears in task list
- AC-EVENT-014-5: Task shows reference to error

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

**Error Object:**
```javascript
{
  errorId: String,
  errorType: Enum ['device', 'task'],
  errorCategory: String,
  severity: Enum ['critical', 'high', 'medium', 'low', 'info'],
  status: Enum ['active', 'in_progress', 'resolved', 'ignored'],
  sourceType: Enum ['robot', 'elevator', 'door', 'task'],
  sourceId: String,
  sourceName: String,
  description: String,
  details: Object,
  occurredTime: DateTime,
  resolvedTime: DateTime | null,
  assignee: String | null,
  assigneeId: String | null,
  assignedTime: DateTime | null,
  resolutionNotes: String | null,
  occurrenceCount: Number,
  relatedErrors: Array<String>
}
```

**Notification Rule Object:**
```javascript
{
  ruleId: String,
  ruleName: String,
  severityLevels: Array<String>,
  errorTypes: Array<String>,
  deviceTypes: Array<String>,
  workAreas: Array<String>,
  channels: Array<String>,
  recipients: Array<String>,
  timeOfDay: Object | null,
  enabled: Boolean
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

**Errors:**
- GET /api/errors - Retrieve error list
- GET /api/errors/:id - Retrieve error details
- POST /api/errors - Create new error
- PUT /api/errors/:id/assign - Assign error to user
- PUT /api/errors/:id/resolve - Resolve error
- PUT /api/errors/:id/ignore - Ignore error
- POST /api/errors/bulk-assign - Bulk assign errors
- GET /api/errors/analytics - Retrieve error analytics
- GET /api/errors/reports - Generate error report
- GET /api/errors/export - Export error data
- POST /api/errors/:id/comments - Add comment to error

**Notification Rules:**
- GET /api/notification-rules - Retrieve notification rules
- GET /api/notification-rules/:id - Retrieve notification rule details
- POST /api/notification-rules - Create new notification rule
- PUT /api/notification-rules/:id - Update notification rule
- DELETE /api/notification-rules/:id - Delete notification rule
- PUT /api/notification-rules/:id/toggle - Enable/disable notification rule

**Notifications:**
- GET /api/notifications - Retrieve user notifications
- PUT /api/notifications/:id/read - Mark notification as read
- PUT /api/notifications/read-all - Mark all notifications as read
- GET /api/notification-preferences - Retrieve user notification preferences
- PUT /api/notification-preferences - Update user notification preferences

#### 6.6.2 WebSocket (Real-time Updates)

- Task status updates
- Device location updates
- Real-time metrics streaming
- Queue position updates
- Error notifications and updates
- Error status changes
- New error alerts
- Notification updates

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
| 1.1 | March 24, 2026 | PM | Added Event Management module with Exception/Alarm feature including device and task error tracking, notification system, analytics, and resolution workflow |

---

**Document End**
