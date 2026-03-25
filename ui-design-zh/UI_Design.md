# Robot Management System - UI Design Document

## 1. Design System

### 1.1 Color Palette

#### Primary Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Primary Blue | `#3498db` | Primary buttons, active states, links |
| Dark Blue-Gray | `#2c3e50` | Sidebar background, headers |
| White | `#ffffff` | Main content background, cards |

#### Status Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Success/Online | `#27ae60` | Completed tasks, online devices |
| Warning/Pending | `#f39c12` | Pending status, warnings |
| Error/Offline | `#e74c3c` | Failed tasks, offline devices, delete buttons |
| Executing | `#9b59b6` | Executing/Running status |
| Assigned | `#3498db` | Assigned status |
| En Route | `#27ae60` | En route status |
| Maintenance | `#f39c12` | Maintenance status |

#### Priority Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| High | `#e74c3c` | High priority badges |
| Normal | `#27ae60` | Normal priority badges |
| Low | `#95a5a6` | Low priority badges |

#### Neutral Colors
| Name | Hex Code | Usage |
|------|----------|-------|
| Light Gray | `#f8f9fa` | Page backgrounds, input backgrounds |
| Border Gray | `#e0e0e0` | Borders, dividers |
| Medium Gray | `#95a5a6` | Secondary buttons, disabled states |
| Text Gray | `#666666` | Secondary text, labels |
| Dark Text | `#333333` | Primary text |
| Heading Text | `#2c3e50` | Headings, titles |

### 1.2 Typography

#### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
```

#### Font Sizes
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 (Sidebar Title) | 18px | 600 | 1.6 |
| H2 (Page Title) | 20px | 600 | 1.6 |
| H3 (Section Title) | 16-18px | 600 | 1.6 |
| H4 (Subsection Title) | 14px | 600 | 1.4 |
| Body Text | 14px | 400 | 1.6 |
| Small Text | 12px | 400 | 1.5 |
| Button Text | 14px | 500 | 1 |
| Table Header | 14px | 600 | 1.4 |
| Table Cell | 14px | 400 | 1.4 |
| Badge Text | 12px | 600 | 1 |

#### Text Transform
- Labels: Uppercase, letter-spacing 0.5px
- Headings: None
- Body: None

### 1.3 Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Tight spacing, icon gaps |
| sm | 8px | Button padding, small gaps |
| md | 12px | Medium gaps, table cell padding |
| lg | 16px | Large gaps, section padding |
| xl | 20px | Page padding, card padding |
| xxl | 30px | Major section spacing |

### 1.4 Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 4px |
| Cards | 8px |
| Badges | 12px |
| Modals | 8px |
| Inputs | 4px |
| Images | 4px |

### 1.5 Shadows

```css
/* Card Shadow */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

/* Modal Shadow */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

/* Dropdown Shadow */
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
```

---

## 2. Component Library

### 2.1 Buttons

#### Primary Button
```
┌─────────────────────┐
│  Add New Task       │
└─────────────────────┘
```
- Background: `#3498db`
- Text: White
- Padding: 8px 16px
- Border-radius: 4px
- Hover: `#2980b9`
- Transform on hover: translateY(-1px)

#### Secondary Button
```
┌─────────────────────┐
│      Refresh        │
└─────────────────────┘
```
- Background: `#95a5a6`
- Text: White
- Padding: 8px 16px
- Hover: `#7f8c8d`

#### View Details Button
```
┌─────────────────────┐
│   View Details      │
└─────────────────────┘
```
- Background: `#f8f9fa`
- Text: `#3498db`
- Border: 1px solid `#3498db`
- Hover: Background `#3498db`, Text white

#### Delete Button
```
┌─────────────────────┐
│      Delete         │
└─────────────────────┘
```
- Background: `#f8f9fa`
- Text: `#e74c3c`
- Border: 1px solid `#e74c3c`
- Hover: Background `#e74c3c`, Text white

#### Back Button
```
┌─────────────────────┐
│  ← Back to List     │
└─────────────────────┘
```
- Background: `#f8f9fa`
- Text: `#333333`
- Border: 1px solid `#dee2e6`
- Hover: Background `#e9ecef`

### 2.2 Status Badges

```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│ Pending  │  │ Running  │  │Completed │  │  Failed  │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
   Orange        Purple        Green         Red
```

- Padding: 4px 10px
- Border-radius: 12px
- Font-size: 12px
- Font-weight: 600

### 2.3 Priority Badges

```
┌──────────┐  ┌──────────┐  ┌──────────┐
│   High   │  │  Normal  │  │   Low    │
└──────────┘  └──────────┘  └──────────┘
    Red          Green         Gray
```

### 2.4 Progress Bar

```
┌────────────────────────────────────────┐
│████████████████░░░░░░░░░░░░░░░░░░░░░░░░│ 60%
└────────────────────────────────────────┘
```
- Background: `#e0e0e0`
- Fill: `#3498db`
- Height: 8px
- Border-radius: 4px

### 2.5 Tables

```
┌────────────┬────────────┬────────────┬────────────┐
│  Header 1  │  Header 2  │  Header 3  │  Header 4  │
├────────────┼────────────┼────────────┼────────────┤
│   Data 1   │   Data 2   │   Data 3   │   Data 4   │
├────────────┼────────────┼────────────┼────────────┤
│   Data 1   │   Data 2   │   Data 3   │   Data 4   │
└────────────┴────────────┴────────────┴────────────┘
```

- Header Background: `#f8f9fa`
- Row Hover: `#f8f9fa`
- Border-bottom: 1px solid `#e0e0e0`
- Cell Padding: 12px

### 2.6 Cards

```
┌─────────────────────────────────────────┐
│  Section Title                          │
├─────────────────────────────────────────┤
│                                         │
│  Content area with information          │
│                                         │
└─────────────────────────────────────────┘
```

- Background: White
- Border-radius: 8px
- Padding: 20px
- Box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)

### 2.7 Modals

```
┌─────────────────────────────────────────┐
│  Modal Title                        ✕   │
├─────────────────────────────────────────┤
│                                         │
│  Modal content goes here                │
│                                         │
├─────────────────────────────────────────┤
│                    [Cancel]  [Confirm]  │
└─────────────────────────────────────────┘
```

- Overlay: rgba(0, 0, 0, 0.5)
- Background: White
- Max-width: 400px
- Border-radius: 8px

### 2.8 Input Fields

```
┌─────────────────────────────────────────┐
│ Search tasks...                    🔍   │
└─────────────────────────────────────────┘
```

- Border: 1px solid `#ddd`
- Border-radius: 4px
- Padding: 8px 12px
- Focus: Border `#3498db`

### 2.9 Dropdowns

```
┌─────────────────────────────────────────┐
│ All Statuses                        ▼   │
└─────────────────────────────────────────┘
```

- Same styling as inputs
- Background: White

---

## 3. Page Wireframes

### 3.1 Main Layout Structure

```
┌────────────────────────────────────────────────────────────────────┐
│                                                                    │
│  ┌──────────┐                                                     │
│  │ Sidebar  │     Main Content Area                               │
│  │          │     ┌──────────────────────────────────────────────┐│
│  │  Title   │     │ Header                           🌐 Language ││
│  │          │     ├──────────────────────────────────────────────┤│
│  │  Nav     │     │                                              ││
│  │   Tasks  │     │                                              ││
│  │   Devices│     │            Page Content                      ││
│  │   Models │     │                                              ││
│  │   Dash   │     │                                              ││
│  │   Report │     │                                              ││
│  │          │     │                                              ││
│  │          │     ├──────────────────────────────────────────────┤│
│  │          │     │ Footer                                       ││
│  └──────────┘     └──────────────────────────────────────────────┘│
│                                                                    │
└────────────────────────────────────────────────────────────────────┘
```

### 3.2 Sidebar Navigation

```
┌─────────────────────┐
│ Robot Management    │
│ System              │
├─────────────────────┤
│                     │
│ ▼ Tasks             │ ← Active/Expanded
│   └ Task List       │ ← Active
│   └ Task Queue      │
│                     │
│   Devices           │
│                     │
│   Models            │
│                     │
│   Dashboard         │
│                     │
│   Reports           │
│                     │
└─────────────────────┘
```

- Width: 250px
- Background: `#2c3e50`
- Active item: `#3498db`
- Submenu background: `#233140`

### 3.3 Task List Page

```
┌────────────────────────────────────────────────────────────────────────┐
│ Task List                                    [Add New Task] [Refresh]  │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [🔍 Search tasks...                    ]                            │ │
│ │                                                                    │ │
│ │ [All Statuses ▼]  [All Robots ▼]                                   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Task ID │ Type │ Name │ Status │ Robot │ Work Area │ ETA │ Actions│ │
│ ├─────────┼──────┼──────┼────────┼───────┼───────────┼─────┼────────┤ │
│ │ #12345  │ 飞速达│ Pack │ En Route│ #7   │ C11       │14:45│[View]  │ │
│ │ #12346  │ 12-3 │ Room │ Execut │ #3   │ C12       │14:50│[View]  │ │
│ │ #12347  │ 机场 │ Airp │ Pending│ #9   │ 复材车间  │15:00│[View]  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│                        [Previous] [1] [2] [3] [Next]                   │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.4 Task Queue Page

```
┌────────────────────────────────────────────────────────────────────────┐
│ Task Queue                                   [Add to Queue] [Refresh]  │
├────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐                     │
│ │ Pending      │ │ In Progress  │ │ Completed    │                     │
│ │     12       │ │      3       │ │     28       │                     │
│ └──────────────┘ └──────────────┘ └──────────────┘                     │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [🔍 Search queue...]  [All Priorities ▼] [All Robots ▼] [工作域 ▼] │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Pos │ Task ID │ Type │ Name │ Status │ Priority │ Robot │ Actions │ │
│ ├─────┼─────────┼──────┼──────┼────────┼──────────┼───────┼─────────┤ │
│ │  1  │ #Q1002  │ 12-3 │ Room │Running │ Normal   │ #7    │[View]   │ │
│ │  2  │ #Q1001  │ 飞速 │ Pack │Pending │ High     │ #3    │[↑][↓]   │ │
│ │  3  │ #Q1003  │ 机场 │ Airp │Pending │ Low      │ #9    │[↑][↓]   │ │
│ │  4  │ #Q1004  │ 配送 │ Ware │Pending │ Normal   │ #5    │[↑][↓]   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│                        [Previous] [1] [2] [3] [Next]                   │
└────────────────────────────────────────────────────────────────────────┘
```

**Position Controls:**
- Running tasks: No controls (fixed position)
- Pending tasks: ↑ and ↓ buttons for reordering
- First pending: ↑ disabled
- Last pending: ↓ disabled

### 3.5 Task Details Page

```
┌────────────────────────────────────────────────────────────────────────┐
│ [← Back to Task List]                                      Task Details│
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Task ID: #12345        Task Type: 飞速达                           │ │
│ │ Task Name: Package Delivery to Floor 3                            │ │
│ │ Status: [En Route]     Priority: [Normal]                         │ │
│ │ Robot: Robot #7        Work Area: C11                             │ │
│ │ Current Location: Elevator, 2nd Floor                             │ │
│ │ ETA: 14:45:30          Start Time: 14:32:15                       │ │
│ │ Estimated Duration: 13 min 15 sec                                  │ │
│ │ Progress: [████████████░░░░░░░░░░░░░░░░] 60%                       │ │
│ │                                                    [Delete]        │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Current Robot Location                                                │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ ┌─────────────────┐                                                │ │
│ │ │ 3rd Floor       │ 🤖 Robot marker                                │ │
│ │ │ Executive Suite │                                                │ │
│ │ ├─────────────────┤                                                │ │
│ │ │ 2nd Floor       │                                                │ │
│ │ │ Offices │[Elev] │ ← Active elevator                              │ │
│ │ ├─────────────────┤                                                │ │
│ │ │ 1st Floor       │                                                │ │
│ │ │ Lobby │ Conf    │                                                │ │
│ │ └─────────────────┘                                                │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Task Steps                                              [🌳] Toggle   │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ 🚀 Start Task: Package Delivery ✓                                  │ │
│ │   ├── 🔋 1. Leave Charging Station ✓                               │ │
│ │   │     └── 14:32:15 - 14:32:47 (32s)                              │ │
│ │   ├── 🧭 2. Navigate to Elevator ✓                                 │ │
│ │   │     └── 14:32:47 - 14:33:20 (33s)                              │ │
│ │   ├── ⏳ 3. Wait for Elevator ✓                                    │ │
│ │   │     └── 14:33:20 - 14:34:05 (45s)                              │ │
│ │   └── 🛗 4. Take Elevator to 3rd Floor ⚡                          │ │
│ │         └── 14:34:05 - (25s)                                       │ │
│ │         ├── 🚶 5. Navigate to Room 301 ⏳                           │ │
│ │         └── 📦 6. Deliver Package ⏳                                │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.6 Device List Page

```
┌────────────────────────────────────────────────────────────────────────┐
│ Device List                                 [Add New Device] [Refresh]  │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [🔍 Search devices...]                                             │ │
│ │                                                                    │ │
│ │ [All Types ▼]  [All Statuses ▼]                                   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │Device ID│ Name │ Type │ Model │ Brand │ Status │ Battery │ Actions│ │
│ ├─────────┼──────┼──────┼───────┼───────┼────────┼─────────┼────────┤ │
│ │TZ123_001│天体0号│Robot │TZC123 │Tianti │[Online]│  85%    │[View]  │ │
│ │TZ122_002│天体1号│Robot │TZC122 │Tianti │[Online]│  92%    │[View]  │ │
│ │XG-001   │XG-R1 │Robot │XG-R1  │仙工   │[Online]│  78%    │[View]  │ │
│ │MIR-001  │MiR200│Robot │MiR200 │MiR    │[Offline]│   0%   │[View]  │ │
│ │ELV-001  │Elev-1│Elev  │Gen2   │Otis   │[Online]│  N/A    │[View]  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│                        [Previous] [1] [2] [3] [Next]                   │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.7 Device Details Page

```
┌────────────────────────────────────────────────────────────────────────┐
│ [← Back to Device List]                                   Device Details│
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ ┌─────────────┐  Basic Information                                 │ │
│ │ │             │  Device ID: TZ123_001                              │ │
│ │ │   [Robot    │  Device Name: 天体0号                              │ │
│ │ │    Image]   │  Model: 抱箱机器人                                 │ │
│ │ │             │  Brand: Tianti                                     │ │
│ │ │             │  Status: [Online]                                  │ │
│ │ │             │  Battery: [████████░░] 85%                         │ │
│ │ │             │  Location: 2nd Floor, Office Area                  │ │
│ │ └─────────────┘  [Edit Device] [Reboot] [Delete]                   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Real-time Information                                                 │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Connection & Mission          │ Location                           │ │
│ │ Connection State: Online      │ Current Location: 2nd Floor        │ │
│ │ Current Mission: Moving...    │ 工作域: Office Area                │ │
│ │                               │ Coordinates: X:12.5, Y:8.3         │ │
│ │                               │ [Mini Map]                         │ │
│ ├───────────────────────────────┼────────────────────────────────────┤ │
│ │ Battery & Power               │ Movement & Safety                  │ │
│ │ State of Charge: 85%          │ Current Speed: 0.8 m/s             │ │
│ │ Status: Discharging           │ Direction: North                   │ │
│ │ Time Remaining: 2h 30m        │ Safety Status: Normal              │ │
│ │ Temperature: 25°C             │ E-Stop: Not Active                 │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Real-time Graphs                                                      │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Velocity Over Time            │ Acceleration & Angular Accel       │ │
│ │ [Line Chart]                  │ [Line Chart]                       │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Static Specifications                                                 │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Physical Dimensions           │ Operational Capabilities           │ │
│ │ Length x Width x Height:      │ Max Speed (Laden): 1.2 m/s         │ │
│ │   500mm x 400mm x 350mm       │ Max Speed (Unladen): 1.5 m/s       │ │
│ │ Turn Radius: Zero             │ Max Payload: 50 kg                 │ │
│ │                               │ Lift Height: N/A                   │ │
│ ├───────────────────────────────┼────────────────────────────────────┤ │
│ │ Interfaces & Connectivity                                        │ │
│ │ Communication Protocol: WiFi 5GHz, Ethernet                       │ │
│ │ I/O Ports: 2x USB, 1x RS-485                                      │ │
│ │ IP Address: 192.168.1.101       MAC Address: 00:1B:44:11:3A:B7    │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Statistics                                                            │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Odometry Data                 │ Performance Metrics                │ │
│ │ Total Distance: 1,245 meters  │ ┌─────────┬────────┬────────┐      │ │
│ │ Operating Time: 48 hours      │ │Task Type│Success │Avg Time│      │ │
│ │ Average Speed: 0.6 m/s        │ ├─────────┼────────┼────────┤      │ │
│ │                               │ │ 飞速达  │ 98.5%  │ 12-3   │      │ │
│ │                               │ │ 配送    │ 99.1%  │ 8-5    │      │ │
│ │                               │ └─────────┴────────┴────────┘      │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Recent Activity                                                       │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Time              │ Activity        │ Details                     │ │
│ │ 2026-02-24 14:30  │ Status Change   │ Changed from Maintenance    │ │
│ │ 2026-02-24 14:25  │ Maintenance     │ Firmware updated to v1.2.3  │ │
│ │ 2026-02-24 10:15  │ Task Completed  │ Completed task #12345       │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.8 Model Management Page

```
┌────────────────────────────────────────────────────────────────────────┐
│ Model List                                    [Add New Model] [Refresh] │
├────────────────────────────────────────────────────────────────────────┤
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [🔍 Search models...]                                              │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Base Model                                                            │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ ┌──────────────────┐ ┌──────────────────┐ ┌──────────────────┐    │ │
│ │ │ Model ID: TZC123 │ │ Model ID: TZC122 │ │ Model ID: XG-R1  │    │ │
│ │ │ Name: 抱箱机器人 │ │ Name: 12-3蜂巢车 │ │ Name: 仙工搬运   │    │ │
│ │ │ Status: Active   │ │ Status: Active   │ │ Status: Active   │    │ │
│ │ │ [View] [Edit]    │ │ [View] [Edit]    │ │ [View] [Edit]    │    │ │
│ │ └──────────────────┘ └──────────────────┘ └──────────────────┘    │ │
│ └────────────────────────────────────────────────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Custom Models                                                         │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ ┌──────────────────┐ ┌──────────────────┐                         │ │
│ │ │ Model ID: CUST01 │ │ Model ID: CUST02 │                         │ │
│ │ │ Name: Custom AMR │ │ Name: Special Bot│                         │ │
│ │ │ Base: TZC123     │ │ Base: XG-R1      │                         │ │
│ │ │ Status: Active   │ │ Status: Inactive │                         │ │
│ │ │ [View] [Edit]    │ │ [View] [Edit]    │                         │ │
│ │ └──────────────────┘ └──────────────────┘                         │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.9 Add New Model Page

```
┌────────────────────────────────────────────────────────────────────────┐
│ [← 返回模型列表]                                  添加新型号          │
├────────────────────────────────────────────────────────────────────────┤
│                                                                      │
│ 基本信息                                                             │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ 型号ID: [________________________]                                 │ │
│ │ 型号名称: [________________________]                               │ │
│ │ 描述: [________________________________]                          │ │
│ │ 制造商: [________________________]                                 │ │
│ │ 版本: [________________________]                                   │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ 设备属性                                                             │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [Add Property] [Import From File]                                  │ │
│ │                                                                   │ │
│ │ ┌───────────────────────────────────────────────────────────────┐  │ │
│ │ │ Key: equip_size_x   Label: 设备X向尺寸长   Type: float        │  │ │
│ │ │ Value: 0.0          Required: [ ]                          │  │ │
│ │ │ [Delete]                                                    │  │ │
│ │ └───────────────────────────────────────────────────────────────┘  │ │
│ │                                                                   │ │
│ │ ┌───────────────────────────────────────────────────────────────┐  │ │
│ │ │ Key: equip_size_y   Label: 设备Y向尺寸宽   Type: float        │  │ │
│ │ │ Value: 0.0          Required: [ ]                          │  │ │
│ │ │ [Delete]                                                    │  │ │
│ │ └───────────────────────────────────────────────────────────────┘  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ 动态属性                                                             │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [Add Property]                                                    │ │
│ │                                                                   │ │
│ │ ┌───────────────────────────────────────────────────────────────┐  │ │
│ │ │ Key: dynamic_param_1  Label: 动态参数1   Type: string        │  │ │
│ │ │ Value:               Required: [ ]                          │  │ │
│ │ │ [Delete]                                                    │  │ │
│ │ └───────────────────────────────────────────────────────────────┘  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ 连接配置                                                             │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [Add Config]                                                      │ │
│ │                                                                   │ │
│ │ ┌───────────────────────────────────────────────────────────────┐  │ │
│ │ │ ID: socket_bridge_topic  Label: 天体套接字桥接通讯            │  │ │
│ │ │ ┌─────────────────────────────────────────────────────────┐  │  │ │
│ │ │ │ Key: equip_id  Label: 设备连接唯一标识  Type: string   │  │  │ │
│ │ │ │ Value: TZXXXN_000  Required: [x]                     │  │  │ │
│ │ │ │ [Delete]                                            │  │  │ │
│ │ │ └─────────────────────────────────────────────────────────┘  │  │ │
│ │ └───────────────────────────────────────────────────────────────┘  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                      │
│ 原子操作                                                             │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ [Add Operation]                                                   │ │
│ │                                                                   │ │
│ │ ┌───────────────────────────────────────────────────────────────┐  │ │
│ │ │ ID: move  Label: 移动                                         │  │ │
│ │ │ ┌─────────────────────────────────────────────────────────┐  │  │ │
│ │ │ │ Key: poi  Label: 目的地  Type: string                │  │  │ │
│ │ │ │ Value:     Required: [x]                            │  │  │ │
│ │ │ │ [Delete]                                            │  │  │ │
│ │ │ └─────────────────────────────────────────────────────────┘  │  │ │
│ │ └───────────────────────────────────────────────────────────────┘  │ │
│ └────────────────────────────────────────────────────────────────────┘ │
│                                                                      │
├────────────────────────────────────────────────────────────────────────┤
│                                [取消]  [保存型号]                    │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.10 Add Device Modal

```
┌─────────────────────────────────────────┐
│  Add New Device                     ✕   │
├─────────────────────────────────────────┤
│                                         │
│  Step 1: Verify Connection              │
│  ┌─────────────────────────────────────┐│
│  │ 连接口令:                           ││
│  │ [________________________]           ││
│  │                                     ││
│  │ Please enter the connection         ││
│  │ password to verify your identity    ││
│  └─────────────────────────────────────┘│
│                                         │
├─────────────────────────────────────────┤
│                    [Cancel]  [验证]     │
└─────────────────────────────────────────┘

         ↓ After verification

┌─────────────────────────────────────────┐
│  Add New Device                     ✕   │
├─────────────────────────────────────────┤
│                                         │
│  Step 2: Enter Device Information       │
│  ┌─────────────────────────────────────┐│
│  │ 设备ID:                             ││
│  │ [________________________]           ││
│  │                                     ││
│  │ 设备名称:                           ││
│  │ [________________________]           ││
│  └─────────────────────────────────────┘│
│                                         │
├─────────────────────────────────────────┤
│                    [取消]  [添加设备]   │
└─────────────────────────────────────────┘
```

---

## 4. Interaction Patterns

### 4.1 Navigation Flows

```
┌─────────────────────────────────────────────────────────────────┐
│                     Navigation Flow                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Sidebar                                                        │
│     │                                                           │
│     ├── Tasks (expandable)                                      │
│     │      ├── Task List ──────────► Task List Page            │
│     │      │         │                                          │
│     │      │         └── Click task row ──► Task Details       │
│     │      │                                                    │
│     │      └── Task Queue ──────────► Task Queue Page          │
│     │               │                                           │
│     │               └── Click task row ──► Task Details        │
│     │                                                           │
│     ├── Devices ───────────────────► Device List Page          │
│     │       │                                                    │
│     │       └── Click device row ───► Device Details           │
│     │                                                           │
│     ├── Models ────────────────────► Model List Page           │
│     │                                                           │
│     ├── Dashboard ─────────────────► Dashboard Page            │
│     │                                                           │
│     └── Reports ───────────────────► Reports Page              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 4.2 Button States

```
Normal State:
┌─────────────────┐
│  Primary Button │  Background: #3498db
└─────────────────┘

Hover State:
┌─────────────────┐
│  Primary Button │  Background: #2980b9, translateY(-1px)
└─────────────────┘

Active/Pressed State:
┌─────────────────┐
│  Primary Button │  Background: #2980b9, translateY(0)
└─────────────────┘

Disabled State:
┌─────────────────┐
│  Disabled       │  Opacity: 0.5, cursor: not-allowed
└─────────────────┘
```

### 4.3 Form Validation States

```
Normal Input:
┌─────────────────────────────────────────┐
│ Enter device ID...                      │
└─────────────────────────────────────────┘
Border: #ddd

Focus Input:
┌─────────────────────────────────────────┐
│ Enter device ID...                      │
└─────────────────────────────────────────┘
Border: #3498db, outline: none

Error Input:
┌─────────────────────────────────────────┐
│ Enter device ID...                      │
└─────────────────────────────────────────┘
Border: #e74c3c
Error message: "This field is required"
```

### 4.4 Loading States

```
Button Loading:
┌─────────────────────────────────────────┐
│  ⟳ Loading...                           │
└─────────────────────────────────────────┘

Table Loading:
┌─────────────────────────────────────────┐
│                                         │
│  ⟳ Loading data...                      │
│                                         │
└─────────────────────────────────────────┘

Card Loading:
┌─────────────────────────────────────────┐
│  ████████████                           │
│  ██████████████████████                 │
│  ████████████████                       │
└─────────────────────────────────────────┘
Skeleton loading animation
```

### 4.5 Animations

#### Pulse Animation (Robot Marker)
```css
@keyframes pulse {
    0% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
    50% {
        transform: translate(-50%, -50%) scale(1.2);
        opacity: 0.7;
    }
    100% {
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
    }
}
```

#### Transition Effects
```css
/* Button transitions */
transition: background-color 0.3s, transform 0.1s;

/* Sidebar nav item */
transition: all 0.3s;

/* Progress bar */
transition: width 0.5s ease;
```

---

## 5. Responsive Design

### 5.1 Breakpoints

| Device | Breakpoint | Layout |
|--------|------------|--------|
| Desktop | > 768px | Full sidebar, full content |
| Tablet | 768px | Collapsible sidebar, stacked content |
| Mobile | < 768px | Hidden sidebar, single column |

### 5.2 Desktop Layout (> 768px)

```
┌────────────────────────────────────────────────────────────────────┐
│ ┌──────────┐ ┌──────────────────────────────────────────────────┐ │
│ │          │ │                                                    │ │
│ │ Sidebar  │ │              Main Content                         │ │
│ │ 250px    │ │              Flexible Width                        │ │
│ │          │ │                                                    │ │
│ │          │ │                                                    │ │
│ │          │ │                                                    │ │
│ │          │ │                                                    │ │
│ └──────────┘ └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

### 5.3 Tablet Layout (768px)

```
┌────────────────────────────────────────────────────────────────────┐
│ ┌────┐ ┌────────────────────────────────────────────────────────┐ │
│ │ ☰  │ │                                                          │ │
│ └────┘ │                    Main Content                         │ │
│        │                                                          │ │
│        │                                                          │ │
│        │                                                          │ │
│        │                                                          │ │
│        └────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘

Sidebar: Hidden, toggleable via hamburger menu
Tables: Scrollable horizontally
Cards: 2-column grid
```

### 5.4 Mobile Layout (< 768px)

```
┌──────────────────────┐
│ ☰  Title        🌐   │
├──────────────────────┤
│                      │
│   Main Content       │
│   Single Column      │
│                      │
│                      │
│                      │
│                      │
│                      │
└──────────────────────┘

Sidebar: Hidden, full-screen overlay when opened
Tables: Scrollable horizontally
Cards: Single column
Buttons: Full width
Search: Full width
Filters: Stacked vertically
```

### 5.5 Responsive Component Adaptations

#### Tables on Mobile
```
Desktop:
┌────────┬────────┬────────┬────────┐
│ Col 1  │ Col 2  │ Col 3  │ Col 4  │
└────────┴────────┴────────┴────────┘

Mobile (Horizontal Scroll):
┌──────────────────────────────────────┐
│ ◄ Col 1 │ Col 2 │ Col 3 │ Col 4 ►   │
└──────────────────────────────────────┘
```

#### Cards on Mobile
```
Desktop:
┌────────────┐ ┌────────────┐ ┌────────────┐
│   Card 1   │ │   Card 2   │ │   Card 3   │
└────────────┘ └────────────┘ └────────────┘

Mobile:
┌──────────────────────┐
│       Card 1         │
├──────────────────────┤
│       Card 2         │
├──────────────────────┤
│       Card 3         │
└──────────────────────┘
```

#### Search and Filters on Mobile
```
Desktop:
┌────────────────────────┐ ┌─────────┐ ┌─────────┐
│ Search...              │ │ Filter 1│ │ Filter 2│
└────────────────────────┘ └─────────┘ └─────────┘

Mobile:
┌──────────────────────┐
│ Search...            │
├──────────────────────┤
│ Filter 1             │
├──────────────────────┤
│ Filter 2             │
└──────────────────────┘
```

---

## 6. Accessibility Guidelines

### 6.1 Color Contrast
- All text must meet WCAG 2.1 AA contrast requirements
- Normal text: minimum 4.5:1 contrast ratio
- Large text: minimum 3:1 contrast ratio

### 6.2 Focus States
- All interactive elements must have visible focus states
- Focus outline: 2px solid #3498db
- Focus offset: 2px

### 6.3 Keyboard Navigation
- All interactive elements accessible via Tab key
- Enter/Space to activate buttons
- Escape to close modals
- Arrow keys for dropdown navigation

### 6.4 Screen Reader Support
- All images must have alt text
- Form inputs must have associated labels
- Status badges should have aria-labels
- Tables should have proper headers

---

## 7. Multi-language Support

### 7.1 Language Switcher
```
┌─────┐
│ 🌐  │ ← Click to open dropdown
└─────┘
    ↓
┌──────────────┐
│ English      │
│ 中文         │
│ 日本語       │
└──────────────┘
```

### 7.2 Text Direction
- Default: Left-to-Right (LTR)
- All layouts support LTR text direction

### 7.3 Font Considerations
- System fonts support all three languages
- Chinese and Japanese characters may require slightly larger font sizes for readability

---

## 8. Icon Library

### 8.1 Navigation Icons
| Icon | Usage |
|------|-------|
| 🤖 | Robot marker on map |
| 🔍 | Search button |
| 🌐 | Language switcher |
| ↑ | Move up (queue position) |
| ↓ | Move down (queue position) |
| ✕ | Close modal |

### 8.2 Status Icons
| Icon | Usage |
|------|-------|
| ✓ | Completed status |
| ⚡ | Executing/Running status |
| ⏳ | Pending status |
| 🚀 | Start task |
| 🔋 | Battery/Charging |
| 🧭 | Navigation |
| 🛗 | Elevator |
| 📦 | Package/Delivery |

---

## 9. Chart Specifications

### 9.1 Velocity Chart
- Type: Line chart
- Color: `#3498db`
- Fill: `rgba(52, 152, 219, 0.1)`
- Y-axis: 0 to 2 m/s
- X-axis: Time (60 seconds)

### 9.2 Acceleration Chart
- Type: Line chart (dual line)
- Line 1 (Acceleration): `#e74c3c`
- Line 2 (Angular Acceleration): `#27ae60`
- Y-axis: -2 to 2
- X-axis: Time (60 seconds)

---

*Document Version: 1.0*
*Last Updated: 2026-03-12*
