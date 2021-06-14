<?php
 
namespace Rate\Currency\Block;
 
use Magento\Framework\View\Element\Template;
use Magento\Widget\Block\BlockInterface;
 
class Index extends Template implements BlockInterface
{
    protected $_template = "rate.phtml";
    protected function _prepareLayout()
    {
        return parent::_prepareLayout();
    }
}
 