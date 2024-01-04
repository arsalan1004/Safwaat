# ------------------- #
#### GENERAL GUIDELINES
# ------------------- #

### Component Function Names: PascalCase
### Regular Function Names: camelCase

### Frontend API Functions should be in separate files
## API Function(functions in API folder) Conventions
# <Http-method><data-type>
  for example:
    getCartData()
    postReviewData()
## The API Function call in component function will be done by handler functions
## WRAPPER Function (component function calling API Functions) Conventions
# <Http-method><data-type>Handler
  for example:
    getCartDataHandler()
    postReviewDataHandler()

## USE ASYNC / AWAIT + Try-catch syntax

# API functions  (rare as we are getting data in required format from backend) include some sort of transformation

# ------------------- #
#### ------------------------------- "FOLDER STRUCTURE" ------------------------------- ####
# ------------------- #
# ------------------- #
#### ------------------------------- FRONTEND ------------------------------- ####
# ------------------- #


### COMPONENTS
## Will include component files
## sub folder / modules may be created as per No. of files for specific functionality
## Will include a UI (Generic Components like: card with round borders) that can be utilized anywhere
    Mostly will include cards, button components


### CONSTANTS
## Some of the UI components will require INITIAL_STATE constants which can be stored in component function however a better approach is to store in constant folder with file name like constant.js OR initial-state.js and import from there

### HOOKS
## Folder containing hooks: each hook will have separate files

### ROUTES
## Contains routes

### STORE
## APP-WIDE-STATE stored in redux
## pair files 
  for example:
    for cart state we would generally have 
      cartActions.js - Async LOGIC
      cartSlice.js - STATE + REDUCERS



# ------------------- #
#### ------------------------------- BACKEND ------------------------------- ####
# ------------------- #