import * as React from 'react';
import {Dialog, DialogType, DialogFooter, DefaultButton} from '@fluentui/react';

import {IDialogProps} from './IDialogProps';
import IEventDetails from  '../IEventDetails/IEventDetails';

export default function IDialog(props:IDialogProps){
    const modelProps = {
        isBlocking: false,
        //styles: { main: { minWidth: '30%' } },
      };
      const dialogContentProps = {
        type: DialogType.close,
        title: 'Event Details',
        subText: '',
      };
  
      return (
        <>
          <Dialog
            hidden={props.hideDialog}
            onDismiss={props.toggleHideDialog}
            dialogContentProps={dialogContentProps}
            modalProps={modelProps}
            minWidth="35%" >

            <IEventDetails 
                Title ={props.eventDetails.Title} 
                Start ={props.eventDetails.Start}
                End = {props.eventDetails.End}
                AllDay = {props.eventDetails.AllDay}
                Body = {props.eventDetails.Body}
                Location = {props.eventDetails.Location}                
            />
            <DialogFooter>
              <DefaultButton onClick={props.toggleHideDialog} text="Close" />
            </DialogFooter>
          </Dialog>
        </>
      );
}