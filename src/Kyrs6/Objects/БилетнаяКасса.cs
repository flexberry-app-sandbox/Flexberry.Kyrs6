﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kyrs6
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Билетная касса.
    /// </summary>
    // *** Start programmer edit section *** (БилетнаяКасса CustomAttributes)

    // *** End programmer edit section *** (БилетнаяКасса CustomAttributes)
    [AutoAltered()]
    [Caption("Билетная касса")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("БилетнаяКассаE", new string[] {
            "Наименование as \'Наименование\'",
            "Адрес as \'Адрес\'"})]
    [View("БилетнаяКассаL", new string[] {
            "Наименование as \'Наименование\'",
            "Адрес as \'Адрес\'"})]
    public class БилетнаяКасса : ICSSoft.STORMNET.DataObject
    {
        
        private string fНаименование;
        
        private string fАдрес;
        
        // *** Start programmer edit section *** (БилетнаяКасса CustomMembers)

        // *** End programmer edit section *** (БилетнаяКасса CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (БилетнаяКасса.Адрес CustomAttributes)

        // *** End programmer edit section *** (БилетнаяКасса.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (БилетнаяКасса.Адрес Get start)

                // *** End programmer edit section *** (БилетнаяКасса.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (БилетнаяКасса.Адрес Get end)

                // *** End programmer edit section *** (БилетнаяКасса.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БилетнаяКасса.Адрес Set start)

                // *** End programmer edit section *** (БилетнаяКасса.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (БилетнаяКасса.Адрес Set end)

                // *** End programmer edit section *** (БилетнаяКасса.Адрес Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (БилетнаяКасса.Наименование CustomAttributes)

        // *** End programmer edit section *** (БилетнаяКасса.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (БилетнаяКасса.Наименование Get start)

                // *** End programmer edit section *** (БилетнаяКасса.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (БилетнаяКасса.Наименование Get end)

                // *** End programmer edit section *** (БилетнаяКасса.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (БилетнаяКасса.Наименование Set start)

                // *** End programmer edit section *** (БилетнаяКасса.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (БилетнаяКасса.Наименование Set end)

                // *** End programmer edit section *** (БилетнаяКасса.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "БилетнаяКассаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БилетнаяКассаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БилетнаяКассаE", typeof(IIS.Kyrs6.БилетнаяКасса));
                }
            }
            
            /// <summary>
            /// "БилетнаяКассаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View БилетнаяКассаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("БилетнаяКассаL", typeof(IIS.Kyrs6.БилетнаяКасса));
                }
            }
        }
    }
}
