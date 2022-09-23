# DM-Helper

DM Helper is a program written for Dungeon Masters using React.
The main feature lets you roll multiples of dice at the same time and 
easily viewing the results and various attributes of said results.
DM Helper Also helps Dungeon Masters with a Note taking feature. 
Sectioned notes allow the user to save, read,
easily access, and change stored data. Users can press Ctrl + F
to use select browsers search feature and find notes faster.

## To Run
   
   Go to this link: https://calebcharris.github.io/DM-Helper/

## Guide

# Rolling mechanic

1. Select a dice from the six dice.
2. A menu will appear under the title, enter how many times the dice should be rolled
   in the field left of the 'Roll' Button.
3. Click the 'Roll' button.<br>
![image](https://user-images.githubusercontent.com/101236440/191092679-2101038c-28de-4832-92e6-ff746244ea9a.png)
4. In the center of the screen the dark read area hold the results of each roll. Above that is the
    Dice buttons and when clicked allow users to roll more dice. Below the roll display area are several listed
    filtering options. **'Total Rolls'** list how many times the dice were rolled, **'Added Rolls'** adds all the results
    together and list the total sum, **'Criticals'** is how many times the highest number was rolled for the selected dice,
    **'Critical1s'** is how many times a number 1 was rolled for the selected dice, **'Sort By Higher'** and **'Sort By Lower'**
    are both buttons that when clicked sort the results in the display area. **'How many roll are above/below: __ There Are:'**
    when a number is entered into the black field the filter option list how many roll results were above/below the entered
    number.
5. The **'Go Back'** button takes the user to the main page.
 
# Notes mechanic
 
1. On the main page and the roll results page there is a button named 'Notes' when this
    button is clicked, user will be taken to the notes page. <br>
    ![image](https://user-images.githubusercontent.com/101236440/191094766-ae85e067-5e8c-42f4-ae91-e66504032316.png)
2. Under the title there are 3 sections, **'Spells'**, **'Items'**, and **'Misc'** respectively. When any of these are clicked the
    header above the note display will change depending on which section was clicked.
3. Under the note display area there are 2 buttons **'Add'** and **'Go Back'**. When add is clicked a form appears above it where
    users may input text in the black text area and save the input by clicking the **'Save at #'** button. The # is the number entry
    the note will save to.
4. To edit or delete a note users can click on a note in the display area and 2 buttons will appear under the display area listed
    as **'Edit:#'** and **'Delete:#'**. The Edit button will open the add form to input new text and save to the number selected, which is
    stated in the **'Save at #'** button. The Delete button will permantely remove the note and the next saved note will replace its place.
    WARNING: Highly recomended users Edit whenever they can instead of deleting a note.
5. To unselect a note the note must be clicked again twice.
 
# About

This program was made by Caleb Harris using React. 
