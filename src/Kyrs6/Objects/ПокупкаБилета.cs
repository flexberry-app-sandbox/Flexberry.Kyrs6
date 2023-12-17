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
    /// Покупка билета.
    /// </summary>
    // *** Start programmer edit section *** (ПокупкаБилета CustomAttributes)

    // *** End programmer edit section *** (ПокупкаБилета CustomAttributes)
    [AutoAltered()]
    [Caption("Покупка билета")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПокупкаБилетаE", new string[] {
            "ДатаПокупки as \'Дата покупки\'",
            "ВремяПокупки as \'Время покупки\'",
            "ДатаПоездки as \'Дата поездки\'",
            "ПунктОтправ as \'Пункт отправления\'",
            "ПунктНазнач as \'Пункт назначения\'",
            "Место as \'Место\'",
            "БилетнаяКасса as \'Билетная касса\'",
            "Покупатель.ФИО as \'Покупатель\'",
            "Перевозчик.Наименование as \'Наименование\'",
            "БилетнаяКасса.Наименование as \'Место расчета\'",
            "БилетнаяКасса.Адрес as \'Адрес расчета\'",
            "Покупатель as \'Покупатель\'",
            "Перевозчик as \'Перевозчик\'",
            "Статус as \'Статус\'"}, Hidden=new string[] {
            "Перевозчик.Наименование",
            "БилетнаяКасса.Наименование"})]
    [MasterViewDefineAttribute("ПокупкаБилетаE", "БилетнаяКасса", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [MasterViewDefineAttribute("ПокупкаБилетаE", "Покупатель", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "БанковскийСчет")]
    [MasterViewDefineAttribute("ПокупкаБилетаE", "Перевозчик", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "Наименование")]
    [View("ПокупкаБилетаL", new string[] {
            "ДатаПокупки as \'Дата покупки\'",
            "ВремяПокупки as \'Время покупки\'",
            "ДатаПоездки as \'Дата поездки\'",
            "ПунктОтправ as \'Пункт отправления\'",
            "ПунктНазнач as \'Пункт назначения\'",
            "Место as \'Место\'",
            "Покупатель.ФИО as \'Покупатель\'",
            "Перевозчик.Наименование as \'Наименование\'",
            "БилетнаяКасса.Наименование as \'Место расчета\'",
            "БилетнаяКасса.Адрес as \'Адрес расчета\'",
            "Статус as \'Статус\'"})]
    public class ПокупкаБилета : ICSSoft.STORMNET.DataObject
    {
        
        private string fПунктОтправ;
        
        private int fМесто;
        
        private System.DateTime fДатаПоездки;
        
        private System.DateTime fДатаПокупки = System.DateTime.Now;
        
        private string fПунктНазнач;
        
        private string fВремяПокупки;
        
        private IIS.Kyrs6.Статус fСтатус;
        
        private IIS.Kyrs6.БилетнаяКасса fБилетнаяКасса;
        
        private IIS.Kyrs6.Покупатель fПокупатель;
        
        private IIS.Kyrs6.Перевозчик fПеревозчик;
        
        // *** Start programmer edit section *** (ПокупкаБилета CustomMembers)

        // *** End programmer edit section *** (ПокупкаБилета CustomMembers)

        
        /// <summary>
        /// ВремяПокупки.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.ВремяПокупки CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.ВремяПокупки CustomAttributes)
        [StrLen(255)]
        public virtual string ВремяПокупки
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ВремяПокупки Get start)

                // *** End programmer edit section *** (ПокупкаБилета.ВремяПокупки Get start)
                string result = this.fВремяПокупки;
                // *** Start programmer edit section *** (ПокупкаБилета.ВремяПокупки Get end)

                // *** End programmer edit section *** (ПокупкаБилета.ВремяПокупки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ВремяПокупки Set start)

                // *** End programmer edit section *** (ПокупкаБилета.ВремяПокупки Set start)
                this.fВремяПокупки = value;
                // *** Start programmer edit section *** (ПокупкаБилета.ВремяПокупки Set end)

                // *** End programmer edit section *** (ПокупкаБилета.ВремяПокупки Set end)
            }
        }
        
        /// <summary>
        /// ДатаПоездки.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.ДатаПоездки CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.ДатаПоездки CustomAttributes)
        public virtual System.DateTime ДатаПоездки
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ДатаПоездки Get start)

                // *** End programmer edit section *** (ПокупкаБилета.ДатаПоездки Get start)
                System.DateTime result = this.fДатаПоездки;
                // *** Start programmer edit section *** (ПокупкаБилета.ДатаПоездки Get end)

                // *** End programmer edit section *** (ПокупкаБилета.ДатаПоездки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ДатаПоездки Set start)

                // *** End programmer edit section *** (ПокупкаБилета.ДатаПоездки Set start)
                this.fДатаПоездки = value;
                // *** Start programmer edit section *** (ПокупкаБилета.ДатаПоездки Set end)

                // *** End programmer edit section *** (ПокупкаБилета.ДатаПоездки Set end)
            }
        }
        
        /// <summary>
        /// ДатаПокупки.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.ДатаПокупки CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.ДатаПокупки CustomAttributes)
        public virtual System.DateTime ДатаПокупки
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ДатаПокупки Get start)

                // *** End programmer edit section *** (ПокупкаБилета.ДатаПокупки Get start)
                System.DateTime result = this.fДатаПокупки;
                // *** Start programmer edit section *** (ПокупкаБилета.ДатаПокупки Get end)

                // *** End programmer edit section *** (ПокупкаБилета.ДатаПокупки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ДатаПокупки Set start)

                // *** End programmer edit section *** (ПокупкаБилета.ДатаПокупки Set start)
                this.fДатаПокупки = value;
                // *** Start programmer edit section *** (ПокупкаБилета.ДатаПокупки Set end)

                // *** End programmer edit section *** (ПокупкаБилета.ДатаПокупки Set end)
            }
        }
        
        /// <summary>
        /// Место.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.Место CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.Место CustomAttributes)
        public virtual int Место
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.Место Get start)

                // *** End programmer edit section *** (ПокупкаБилета.Место Get start)
                int result = this.fМесто;
                // *** Start programmer edit section *** (ПокупкаБилета.Место Get end)

                // *** End programmer edit section *** (ПокупкаБилета.Место Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.Место Set start)

                // *** End programmer edit section *** (ПокупкаБилета.Место Set start)
                this.fМесто = value;
                // *** Start programmer edit section *** (ПокупкаБилета.Место Set end)

                // *** End programmer edit section *** (ПокупкаБилета.Место Set end)
            }
        }
        
        /// <summary>
        /// ПунктНазнач.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.ПунктНазнач CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.ПунктНазнач CustomAttributes)
        [StrLen(255)]
        public virtual string ПунктНазнач
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ПунктНазнач Get start)

                // *** End programmer edit section *** (ПокупкаБилета.ПунктНазнач Get start)
                string result = this.fПунктНазнач;
                // *** Start programmer edit section *** (ПокупкаБилета.ПунктНазнач Get end)

                // *** End programmer edit section *** (ПокупкаБилета.ПунктНазнач Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ПунктНазнач Set start)

                // *** End programmer edit section *** (ПокупкаБилета.ПунктНазнач Set start)
                this.fПунктНазнач = value;
                // *** Start programmer edit section *** (ПокупкаБилета.ПунктНазнач Set end)

                // *** End programmer edit section *** (ПокупкаБилета.ПунктНазнач Set end)
            }
        }
        
        /// <summary>
        /// ПунктОтправ.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.ПунктОтправ CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.ПунктОтправ CustomAttributes)
        [StrLen(255)]
        public virtual string ПунктОтправ
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ПунктОтправ Get start)

                // *** End programmer edit section *** (ПокупкаБилета.ПунктОтправ Get start)
                string result = this.fПунктОтправ;
                // *** Start programmer edit section *** (ПокупкаБилета.ПунктОтправ Get end)

                // *** End programmer edit section *** (ПокупкаБилета.ПунктОтправ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.ПунктОтправ Set start)

                // *** End programmer edit section *** (ПокупкаБилета.ПунктОтправ Set start)
                this.fПунктОтправ = value;
                // *** Start programmer edit section *** (ПокупкаБилета.ПунктОтправ Set end)

                // *** End programmer edit section *** (ПокупкаБилета.ПунктОтправ Set end)
            }
        }
        
        /// <summary>
        /// Статус.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.Статус CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.Статус CustomAttributes)
        public virtual IIS.Kyrs6.Статус Статус
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.Статус Get start)

                // *** End programmer edit section *** (ПокупкаБилета.Статус Get start)
                IIS.Kyrs6.Статус result = this.fСтатус;
                // *** Start programmer edit section *** (ПокупкаБилета.Статус Get end)

                // *** End programmer edit section *** (ПокупкаБилета.Статус Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.Статус Set start)

                // *** End programmer edit section *** (ПокупкаБилета.Статус Set start)
                this.fСтатус = value;
                // *** Start programmer edit section *** (ПокупкаБилета.Статус Set end)

                // *** End programmer edit section *** (ПокупкаБилета.Статус Set end)
            }
        }
        
        /// <summary>
        /// Покупка билета.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.БилетнаяКасса CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.БилетнаяКасса CustomAttributes)
        [PropertyStorage(new string[] {
                "БилетнаяКасса"})]
        [NotNull()]
        public virtual IIS.Kyrs6.БилетнаяКасса БилетнаяКасса
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.БилетнаяКасса Get start)

                // *** End programmer edit section *** (ПокупкаБилета.БилетнаяКасса Get start)
                IIS.Kyrs6.БилетнаяКасса result = this.fБилетнаяКасса;
                // *** Start programmer edit section *** (ПокупкаБилета.БилетнаяКасса Get end)

                // *** End programmer edit section *** (ПокупкаБилета.БилетнаяКасса Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.БилетнаяКасса Set start)

                // *** End programmer edit section *** (ПокупкаБилета.БилетнаяКасса Set start)
                this.fБилетнаяКасса = value;
                // *** Start programmer edit section *** (ПокупкаБилета.БилетнаяКасса Set end)

                // *** End programmer edit section *** (ПокупкаБилета.БилетнаяКасса Set end)
            }
        }
        
        /// <summary>
        /// Покупка билета.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.Перевозчик CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.Перевозчик CustomAttributes)
        [PropertyStorage(new string[] {
                "Перевозчик"})]
        [NotNull()]
        public virtual IIS.Kyrs6.Перевозчик Перевозчик
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.Перевозчик Get start)

                // *** End programmer edit section *** (ПокупкаБилета.Перевозчик Get start)
                IIS.Kyrs6.Перевозчик result = this.fПеревозчик;
                // *** Start programmer edit section *** (ПокупкаБилета.Перевозчик Get end)

                // *** End programmer edit section *** (ПокупкаБилета.Перевозчик Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.Перевозчик Set start)

                // *** End programmer edit section *** (ПокупкаБилета.Перевозчик Set start)
                this.fПеревозчик = value;
                // *** Start programmer edit section *** (ПокупкаБилета.Перевозчик Set end)

                // *** End programmer edit section *** (ПокупкаБилета.Перевозчик Set end)
            }
        }
        
        /// <summary>
        /// Покупка билета.
        /// </summary>
        // *** Start programmer edit section *** (ПокупкаБилета.Покупатель CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.Покупатель CustomAttributes)
        [PropertyStorage(new string[] {
                "Покупатель"})]
        [NotNull()]
        public virtual IIS.Kyrs6.Покупатель Покупатель
        {
            get
            {
                // *** Start programmer edit section *** (ПокупкаБилета.Покупатель Get start)

                // *** End programmer edit section *** (ПокупкаБилета.Покупатель Get start)
                IIS.Kyrs6.Покупатель result = this.fПокупатель;
                // *** Start programmer edit section *** (ПокупкаБилета.Покупатель Get end)

                // *** End programmer edit section *** (ПокупкаБилета.Покупатель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПокупкаБилета.Покупатель Set start)

                // *** End programmer edit section *** (ПокупкаБилета.Покупатель Set start)
                this.fПокупатель = value;
                // *** Start programmer edit section *** (ПокупкаБилета.Покупатель Set end)

                // *** End programmer edit section *** (ПокупкаБилета.Покупатель Set end)
            }
        }
        
        // *** Start programmer edit section *** (ПокупкаБилета.Печать CustomAttributes)

        // *** End programmer edit section *** (ПокупкаБилета.Печать CustomAttributes)
        [ICSSoft.STORMNET.AccessType(ICSSoft.STORMNET.AccessType.none)]
        public virtual void Печать()
        {
            // *** Start programmer edit section *** (ПокупкаБилета.Печать method implementation)

            return;
            // *** End programmer edit section *** (ПокупкаБилета.Печать method implementation)
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПокупкаБилетаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПокупкаБилетаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПокупкаБилетаE", typeof(IIS.Kyrs6.ПокупкаБилета));
                }
            }
            
            /// <summary>
            /// "ПокупкаБилетаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПокупкаБилетаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПокупкаБилетаL", typeof(IIS.Kyrs6.ПокупкаБилета));
                }
            }
        }
    }
}
