# Components Structure

This directory is organized by component type for better maintainability and clarity.

## Directory Structure

### `/table`
Table-related components for displaying task lists.
- `Table.tsx` - Main table container (composable)
- `TableHeader.tsx` - Header with badge and column labels
- `TableBody.tsx` - Body container for rows
- `TableRow.tsx` - Individual table row
- `TableCell.tsx` - Reusable table cell
- `TableBadge.tsx` - Badge showing count (e.g., "6 PENDING")
- `TablePagination.tsx` - Pagination controls

### `/form`
Form input components.
- `Checkbox.tsx` - Custom checkbox with Tailwind styling

### `/badge`
Badge and tag components.
- `TaskTypeBadge.tsx` - Badge for task types (Structure, Agriculture, Health, etc.)

### `/navigation`
Navigation components.
- `TabBar.tsx` - Tab bar container
- `Tab.tsx` - Individual tab component

### `/layout`
Layout and container components.
- `AppHeader.tsx` - Application header with logo
- `TaskList.tsx` - Main task list orchestrator

## Root Components
- `FieldData.tsx` - Main application component using all sub-components
