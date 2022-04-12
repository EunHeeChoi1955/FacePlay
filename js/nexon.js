;(function($, window, document, undefined){
    

    var facePlay = {
        init:       function(){ 
            this.chatBtnFn();
            this.mainBtnFn();
            this.Layout1Btn();
            this.Layout2Btn();
    
        },
        chatBtnFn: function(){ 
            
            var $chatBtn  = $( '.chatBtn' );
            var $hide     = $( '.hide' );
            var $chat     = $( '.chat' );
            var $Btn      = $( '.mainBtn, .Layout1Btn, .Layout2Btn' );
            
            
            
            $hide.hide();
                $chatBtn.on({                                 
                    click:  function(event){                        
                        event.preventDefault();                       
                        $chat.stop().toggleClass( 'chatAdd' );
                        $chatBtn.stop().toggleClass( 'addBtn' );
                        $Btn.stop().removeClass( 'addBtn' );
						
                    }
                });

        },            
        mainBtnFn:   function(){

            var $mainBtn  = $( '.mainBtn' );
            var $timer    = $( '.timer' );
            var $boxWrap  = $( '.box-wrap' );
            var $hide     = $( '.hide' );
            var $Btn      = $( '.Layout1Btn, .Layout2Btn, .chatBtn' );
            
                
                $mainBtn.on({
                    click:  function(event){
                        event.preventDefault(); 
                        $hide.hide();
                        $timer.removeClass( 'addBox' ).stop().animate({left :'0px'},.00001);
                        $boxWrap.removeClass( 'addBox' );
                        $mainBtn.toggleClass( 'addBtn' );
                        $Btn.removeClass( 'addBtn' );
                    }
                });



        },            
        Layout1Btn:   function(){

            var $Layout1Btn  = $( '.Layout1Btn' );
            var $timer       = $( '.timer' );
            var $boxWrap     = $( '.box-wrap' );
            var $hide        = $( '.hide' );
            var $Btn         = $( '.mainBtn,  .Layout2Btn, .chatBtn' );
            
                
                $Layout1Btn.on({
                    click:  function(event){  
                        event.preventDefault();       
                        $hide.hide();              
                        $boxWrap.removeClass( 'Layout2' );
                        $boxWrap.addClass( 'addBox' );
                        $timer.addClass( 'addBox' );
                        $Layout1Btn.toggleClass( 'addBtn' );
                        $timer.addClass( 'addBox' ).stop().animate({left :'80px'},.1,'easeInOutCirc');
                        $Btn.removeClass( 'addBtn' );
            
                    }
                });



        },            
        Layout2Btn:   function(){

            var $Layout2Btn  = $( '.Layout2Btn' );
            var $timer       = $( '.timer' );
            var $boxWrap     = $( '.box-wrap' );
            var $hide        = $( '.hide' );
            var $Btn         = $( '.mainBtn, .Layout1Btn, .chatBtn' );

                $Layout2Btn.on({
                    click:  function(event){  
                        event.preventDefault();   
                        $hide.show().addClass( 'Layout2hide' );                    
                        $Layout2Btn.toggleClass( 'addBtn' );  
                        $boxWrap.addClass( 'addBox' );            
                        $timer.addClass( 'addBox' ).stop().animate({left :'-200px'},.1,'easeInOutCirc'); 
                        $Btn.removeClass( 'addBtn' );
                    }
                });

        }

    };  


    
    facePlay.init(); 


})(jQuery, window, document);
